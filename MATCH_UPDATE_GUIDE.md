# Match Update Procedure

How to update this site when a World Cup match finishes. Everything lives in
[script.js](script.js) — there is no backend or database, so every field below
is a plain JS object edit.

## 1. Find matches that need updating

A match needs updating when its kickoff (`date` + `time`) has passed but its
`fixturesData` entry still has `status: "upcoming"` (and `score1`/`score2`
are `null`). Scan the array for that combination first.

```bash
node -e "
const fs=require('fs');
const code=fs.readFileSync('script.js','utf8');
const m=code.match(/const fixturesData = (\[[\s\S]*?\]);/);
console.log('grep status:\"upcoming\" entries and compare date/time to today by eye');
"
```
In practice it's faster to just `grep -n '"upcoming"' script.js` and eyeball
the `date`/`time` against the current date.

## 2. Verify the real result before writing anything

**Never guess a score, scorer, or card — always verify via web search first.**
This is a real, ongoing tournament, so ground truth exists online.

1. `WebSearch` for `"<Team A> vs <Team B> World Cup 2026 result"`.
2. If you need goal scorers/cards, search for the match report (e.g. ESPN,
   CBS Sports, BBC) or `site:fifa.com` match centre articles.
3. **Cross-check with a second source whenever a goal/card list doesn't sum
   to the known final score.** WebFetch occasionally pulls a stale or
   mismatched list from JS-rendered pages (FIFA's match centre is a SPA and
   often returns empty content via WebFetch — use WebSearch instead, or
   static pages like Wikipedia's group-stage articles, which fetch fine).
4. Trust pre-existing curated data in the file over a fresh, imprecise
   search snippet when they conflict on a minor detail (e.g. exact minute)
   — only the event *type* and *which team* matter for the calculations
   below, so don't overwrite a minute that's already on record without a
   good reason.

## 3. Update `fixturesData`

Find the match's object (search by `id`) and set:

```js
score1: <int>, score2: <int>, status: "completed"
```

`team1`/`team2`, flags, venue, city, date, time stay as-is — they're set at
fixture-creation time and don't change.

## 4. Add events to `matchEvents`

`matchEvents` is keyed by the same `id`. Each entry is an array of:

```js
{ type: 'goal' | 'og' | 'yellow' | 'red', team: 1 | 2, player: 'Name', minute: '45+2' }
```

- `team: 1` = `team1` in the fixture, `team: 2` = `team2`. Double-check which
  side actually scored/was booked — it's easy to flip these.
- `type: 'og'` is an own goal; it still counts toward the *scoring* team's
  `gf`/the conceding team's `ga` the same way a normal goal would, since the
  scoreline already reflects it — only the on-page label differs (shows "OG").
- The data model does not distinguish a second-yellow-card red from a
  straight red. Both are written as `type: 'red'`.
- Add **every** booking, not just goals — yellow/red cards feed the
  disciplinary tiebreaker (see below) and silently omitting one can flip a
  group's standings order.
- If the match has zero cards and isn't 0-0, you can still omit the entry
  entirely if there truly are no events — `buildEventsSection()` in
  script.js handles a missing/empty `matchEvents[id]` gracefully. But if you
  know cards exist, add them even when neither team scored (e.g. a 0-0 draw
  with bookings) — they're load-bearing for standings, not just display.

## 5. Add the highlight video to `matchHighlights`

```js
<id>: 'https://www.fifa.com/en/watch/<slug>',
```

Search `"fifa.com/en/watch <Team A> <Team B> highlights World Cup 2026"`.
If no `fifa.com/en/watch` link turns up after a couple of searches, leave the
`id` out of the object rather than inventing a URL — several matches
(e.g. id 43, 50) simply don't have one yet and the UI handles a missing
entry fine (`matchHighlights[fixture.id]` is just `undefined`).

## 6. Standings — nothing to update manually

Group standings are **never** stored — `calculateGroupStandings(groupName)`
recomputes them on every render straight from `fixturesData` +
`matchEvents`. As long as steps 3–4 are done correctly, the standings table,
the group preview cards, and the qualification highlighting all update
themselves automatically.

Tiebreak order implemented in code (simplified FIFA 2026 rules — world
ranking as a final tiebreak is *not* implemented):

1. Points
2. Goal difference
3. Goals scored
4. Disciplinary points (`yellow = -1`, `red = -4`), shown as the **DISC**
   column

Note: real FIFA rules also insert a head-to-head check before "overall goal
difference" when exactly two teams are tied, and fall back to FIFA world
ranking after disciplinary points. Neither is implemented — if you hit a
case where the computed order doesn't match the real table, it's most
likely one of these two gaps. Verify against Wikipedia's group article or
fifa.com/standings before "fixing" it, since the array insertion order
(team1-before-team2, fixture-array order) has so far coincidentally matched
the real ranking-based tiebreak in every case checked.

## 7. Qualification highlighting (best third-placed teams)

The Round of 32 = top 2 from every group + the 8 best third-placed teams
overall. `getQualifyingThirdPlaceTeams()` in script.js gathers each group's
3rd-place team and ranks them against each other using the same tiebreak
chain as step 6, then returns the best 8 by name. This also recomputes
automatically — no manual step needed once `fixturesData`/`matchEvents` are
correct.

## 8. Verify before reporting done

```bash
node --check script.js && echo SYNTAX_OK
```

To sanity-check the computed standings/qualification without a browser
(there's no browser tool in this environment), load script.js in a Node VM
with stubbed `document`/`localStorage`/`window` globals and call
`calculateGroupStandings('Group X')` / `getQualifyingThirdPlaceTeams()`
directly — this was the approach used to confirm Group B's disciplinary
tiebreak (Switzerland/Canada/Qatar/Bosnia) and the best-8-thirds list
matched real-world tables exactly. A real browser check of the
gold/blue qualification styling is still worth doing manually when possible.

## 9. Git

Don't commit or push unless explicitly asked, even after a full update pass.
