// FIFA World Cup 2026 - Official Fixture Data (All times in IST)
const fixturesData = [
    // ===== GROUP A =====
    { id: 1,  date: "2026-06-12", time: "05:30 IST", group: "Group A", team1: "Mexico",       team1Flag: "🇲🇽", team2: "South Africa",          team2Flag: "🇿🇦", score1: 2,    score2: 0,    status: "completed", venue: "Estadio Azteca",          city: "Mexico City" },
    { id: 2,  date: "2026-06-12", time: "08:30 IST", group: "Group A", team1: "South Korea",  team1Flag: "🇰🇷", team2: "Czechia",                team2Flag: "🇨🇿", score1: 2,    score2: 1,    status: "completed", venue: "Estadio Akron",           city: "Guadalajara" },
    { id: 3,  date: "2026-06-18", time: "21:30 IST", group: "Group A", team1: "Czechia",      team1Flag: "🇨🇿", team2: "South Africa",          team2Flag: "🇿🇦", score1: null, score2: null, status: "upcoming",  venue: "Mercedes-Benz Stadium",  city: "Atlanta" },
    { id: 4,  date: "2026-06-19", time: "06:30 IST", group: "Group A", team1: "Mexico",       team1Flag: "🇲🇽", team2: "South Korea",           team2Flag: "🇰🇷", score1: null, score2: null, status: "upcoming",  venue: "Estadio Akron",           city: "Guadalajara" },
    { id: 5,  date: "2026-06-25", time: "06:30 IST", group: "Group A", team1: "Czechia",      team1Flag: "🇨🇿", team2: "Mexico",                team2Flag: "🇲🇽", score1: null, score2: null, status: "upcoming",  venue: "Estadio Azteca",          city: "Mexico City" },
    { id: 6,  date: "2026-06-25", time: "06:30 IST", group: "Group A", team1: "South Africa", team1Flag: "🇿🇦", team2: "South Korea",           team2Flag: "🇰🇷", score1: null, score2: null, status: "upcoming",  venue: "Estadio BBVA",            city: "Monterrey" },

    // ===== GROUP B =====
    { id: 7,  date: "2026-06-13", time: "00:30 IST", group: "Group B", team1: "Canada",                 team1Flag: "🇨🇦", team2: "Bosnia and Herzegovina", team2Flag: "🇧🇦", score1: 1,    score2: 1,    status: "completed", venue: "BMO Field",              city: "Toronto" },
    { id: 8,  date: "2026-06-14", time: "00:30 IST", group: "Group B", team1: "Qatar",                  team1Flag: "🇶🇦", team2: "Switzerland",            team2Flag: "🇨🇭", score1: 1,    score2: 1,    status: "completed",  venue: "Levi's Stadium",         city: "San Francisco Bay Area" },
    { id: 9,  date: "2026-06-19", time: "00:30 IST", group: "Group B", team1: "Switzerland",            team1Flag: "🇨🇭", team2: "Bosnia and Herzegovina", team2Flag: "🇧🇦", score1: null, score2: null, status: "upcoming",  venue: "SoFi Stadium",           city: "Los Angeles" },
    { id: 10, date: "2026-06-19", time: "03:30 IST", group: "Group B", team1: "Canada",                 team1Flag: "🇨🇦", team2: "Qatar",                  team2Flag: "🇶🇦", score1: null, score2: null, status: "upcoming",  venue: "BC Place",               city: "Vancouver" },
    { id: 11, date: "2026-06-25", time: "00:30 IST", group: "Group B", team1: "Switzerland",            team1Flag: "🇨🇭", team2: "Canada",                 team2Flag: "🇨🇦", score1: null, score2: null, status: "upcoming",  venue: "BC Place",               city: "Vancouver" },
    { id: 12, date: "2026-06-25", time: "00:30 IST", group: "Group B", team1: "Bosnia and Herzegovina", team1Flag: "🇧🇦", team2: "Qatar",                  team2Flag: "🇶🇦", score1: null, score2: null, status: "upcoming",  venue: "Lumen Field",            city: "Seattle" },

    // ===== GROUP C =====
    { id: 13, date: "2026-06-14", time: "03:30 IST", group: "Group C", team1: "Brazil",   team1Flag: "🇧🇷", team2: "Morocco",  team2Flag: "🇲🇦", score1: 1,    score2: 1,    status: "completed", venue: "MetLife Stadium",          city: "New York/New Jersey" },
    { id: 14, date: "2026-06-14", time: "06:30 IST", group: "Group C", team1: "Haiti",    team1Flag: "🇭🇹", team2: "Scotland", team2Flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", score1: 0,    score2: 1,    status: "completed", venue: "Gillette Stadium",         city: "Boston" },
    { id: 15, date: "2026-06-20", time: "03:30 IST", group: "Group C", team1: "Scotland", team1Flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", team2: "Morocco",  team2Flag: "🇲🇦", score1: null, score2: null, status: "upcoming", venue: "Gillette Stadium",         city: "Boston" },
    { id: 16, date: "2026-06-20", time: "06:30 IST", group: "Group C", team1: "Brazil",   team1Flag: "🇧🇷", team2: "Haiti",    team2Flag: "🇭🇹", score1: null, score2: null, status: "upcoming", venue: "Lincoln Financial Field",  city: "Philadelphia" },
    { id: 17, date: "2026-06-25", time: "03:30 IST", group: "Group C", team1: "Scotland", team1Flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", team2: "Brazil",   team2Flag: "🇧🇷", score1: null, score2: null, status: "upcoming", venue: "Hard Rock Stadium",        city: "Miami" },
    { id: 18, date: "2026-06-25", time: "03:30 IST", group: "Group C", team1: "Morocco",  team1Flag: "🇲🇦", team2: "Haiti",    team2Flag: "🇭🇹", score1: null, score2: null, status: "upcoming", venue: "Mercedes-Benz Stadium",   city: "Atlanta" },

    // ===== GROUP D =====
    { id: 19, date: "2026-06-13", time: "06:30 IST", group: "Group D", team1: "USA",       team1Flag: "🇺🇸", team2: "Paraguay",  team2Flag: "🇵🇾", score1: 4,    score2: 1,    status: "completed", venue: "SoFi Stadium",            city: "Los Angeles" },
    { id: 20, date: "2026-06-14", time: "09:30 IST", group: "Group D", team1: "Australia", team1Flag: "🇦🇺", team2: "Türkiye",   team2Flag: "🇹🇷", score1: 2,    score2: 0,    status: "completed",  venue: "BC Place",                city: "Vancouver" },
    { id: 21, date: "2026-06-20", time: "00:30 IST", group: "Group D", team1: "USA",       team1Flag: "🇺🇸", team2: "Australia", team2Flag: "🇦🇺", score1: null, score2: null, status: "upcoming",  venue: "Lumen Field",             city: "Seattle" },
    { id: 22, date: "2026-06-20", time: "09:30 IST", group: "Group D", team1: "Türkiye",   team1Flag: "🇹🇷", team2: "Paraguay",  team2Flag: "🇵🇾", score1: null, score2: null, status: "upcoming",  venue: "Levi's Stadium",          city: "San Francisco Bay Area" },
    { id: 23, date: "2026-06-26", time: "07:30 IST", group: "Group D", team1: "Türkiye",   team1Flag: "🇹🇷", team2: "USA",       team2Flag: "🇺🇸", score1: null, score2: null, status: "upcoming",  venue: "SoFi Stadium",            city: "Los Angeles" },
    { id: 24, date: "2026-06-26", time: "07:30 IST", group: "Group D", team1: "Paraguay",  team1Flag: "🇵🇾", team2: "Australia", team2Flag: "🇦🇺", score1: null, score2: null, status: "upcoming",  venue: "Levi's Stadium",          city: "San Francisco Bay Area" },

    // ===== GROUP E =====
    { id: 25, date: "2026-06-14", time: "22:30 IST", group: "Group E", team1: "Germany",     team1Flag: "🇩🇪", team2: "Curaçao",     team2Flag: "🇨🇼", score1: 7,    score2: 1,    status: "completed", venue: "NRG Stadium",             city: "Houston" },
    { id: 26, date: "2026-06-15", time: "04:30 IST", group: "Group E", team1: "Ivory Coast", team1Flag: "🇨🇮", team2: "Ecuador",     team2Flag: "🇪🇨", score1: 1,    score2: 0,    status: "completed", venue: "Lincoln Financial Field",  city: "Philadelphia" },
    { id: 27, date: "2026-06-21", time: "01:30 IST", group: "Group E", team1: "Germany",     team1Flag: "🇩🇪", team2: "Ivory Coast", team2Flag: "🇨🇮", score1: null, score2: null, status: "upcoming", venue: "BMO Field",               city: "Toronto" },
    { id: 28, date: "2026-06-21", time: "05:30 IST", group: "Group E", team1: "Ecuador",     team1Flag: "🇪🇨", team2: "Curaçao",     team2Flag: "🇨🇼", score1: null, score2: null, status: "upcoming", venue: "Arrowhead Stadium",       city: "Kansas City" },
    { id: 29, date: "2026-06-26", time: "01:30 IST", group: "Group E", team1: "Ecuador",     team1Flag: "🇪🇨", team2: "Germany",     team2Flag: "🇩🇪", score1: null, score2: null, status: "upcoming", venue: "MetLife Stadium",         city: "New York/New Jersey" },
    { id: 30, date: "2026-06-26", time: "01:30 IST", group: "Group E", team1: "Curaçao",     team1Flag: "🇨🇼", team2: "Ivory Coast", team2Flag: "🇨🇮", score1: null, score2: null, status: "upcoming", venue: "Lincoln Financial Field",  city: "Philadelphia" },

    // ===== GROUP F =====
    { id: 31, date: "2026-06-15", time: "01:30 IST", group: "Group F", team1: "Netherlands", team1Flag: "🇳🇱", team2: "Japan",       team2Flag: "🇯🇵", score1: 2,    score2: 2,    status: "completed", venue: "AT&T Stadium",            city: "Dallas" },
    { id: 32, date: "2026-06-15", time: "07:30 IST", group: "Group F", team1: "Sweden",      team1Flag: "🇸🇪", team2: "Tunisia",     team2Flag: "🇹🇳", score1: 5,    score2: 1,    status: "completed", venue: "Estadio BBVA",            city: "Monterrey" },
    { id: 33, date: "2026-06-20", time: "22:30 IST", group: "Group F", team1: "Netherlands", team1Flag: "🇳🇱", team2: "Sweden",      team2Flag: "🇸🇪", score1: null, score2: null, status: "upcoming", venue: "NRG Stadium",             city: "Houston" },
    { id: 34, date: "2026-06-21", time: "09:30 IST", group: "Group F", team1: "Tunisia",     team1Flag: "🇹🇳", team2: "Japan",       team2Flag: "🇯🇵", score1: null, score2: null, status: "upcoming", venue: "Estadio BBVA",            city: "Monterrey" },
    { id: 35, date: "2026-06-26", time: "04:30 IST", group: "Group F", team1: "Japan",       team1Flag: "🇯🇵", team2: "Sweden",      team2Flag: "🇸🇪", score1: null, score2: null, status: "upcoming", venue: "AT&T Stadium",            city: "Dallas" },
    { id: 36, date: "2026-06-26", time: "04:30 IST", group: "Group F", team1: "Tunisia",     team1Flag: "🇹🇳", team2: "Netherlands", team2Flag: "🇳🇱", score1: null, score2: null, status: "upcoming", venue: "Arrowhead Stadium",       city: "Kansas City" },

    // ===== GROUP G =====
    { id: 37, date: "2026-06-16", time: "06:30 IST", group: "Group G", team1: "Iran",        team1Flag: "🇮🇷", team2: "New Zealand", team2Flag: "🇳🇿", score1: 2,    score2: 2,    status: "completed", venue: "SoFi Stadium",            city: "Los Angeles" },
    { id: 38, date: "2026-06-16", time: "00:30 IST", group: "Group G", team1: "Belgium",     team1Flag: "🇧🇪", team2: "Egypt",       team2Flag: "🇪🇬", score1: 1,    score2: 1,    status: "completed", venue: "Lumen Field",             city: "Seattle" },
    { id: 39, date: "2026-06-22", time: "00:30 IST", group: "Group G", team1: "Belgium",     team1Flag: "🇧🇪", team2: "Iran",        team2Flag: "🇮🇷", score1: null, score2: null, status: "upcoming", venue: "SoFi Stadium",            city: "Los Angeles" },
    { id: 40, date: "2026-06-22", time: "06:30 IST", group: "Group G", team1: "New Zealand", team1Flag: "🇳🇿", team2: "Egypt",       team2Flag: "🇪🇬", score1: null, score2: null, status: "upcoming", venue: "BC Place",                city: "Vancouver" },
    { id: 41, date: "2026-06-27", time: "08:30 IST", group: "Group G", team1: "Egypt",       team1Flag: "🇪🇬", team2: "Iran",        team2Flag: "🇮🇷", score1: null, score2: null, status: "upcoming", venue: "Lumen Field",             city: "Seattle" },
    { id: 42, date: "2026-06-27", time: "08:30 IST", group: "Group G", team1: "New Zealand", team1Flag: "🇳🇿", team2: "Belgium",     team2Flag: "🇧🇪", score1: null, score2: null, status: "upcoming", venue: "BC Place",                city: "Vancouver" },

    // ===== GROUP H =====
    { id: 43, date: "2026-06-15", time: "21:30 IST", group: "Group H", team1: "Spain",        team1Flag: "🇪🇸", team2: "Cape Verde",  team2Flag: "🇨🇻", score1: 0,    score2: 0,    status: "completed", venue: "Mercedes-Benz Stadium",  city: "Atlanta" },
    { id: 44, date: "2026-06-16", time: "03:30 IST", group: "Group H", team1: "Saudi Arabia", team1Flag: "🇸🇦", team2: "Uruguay",     team2Flag: "🇺🇾", score1: 1,    score2: 1,    status: "completed", venue: "Hard Rock Stadium",       city: "Miami" },
    { id: 45, date: "2026-06-21", time: "21:30 IST", group: "Group H", team1: "Spain",        team1Flag: "🇪🇸", team2: "Saudi Arabia",team2Flag: "🇸🇦", score1: null, score2: null, status: "upcoming", venue: "Mercedes-Benz Stadium",  city: "Atlanta" },
    { id: 46, date: "2026-06-22", time: "03:30 IST", group: "Group H", team1: "Uruguay",      team1Flag: "🇺🇾", team2: "Cape Verde",  team2Flag: "🇨🇻", score1: null, score2: null, status: "upcoming", venue: "Hard Rock Stadium",       city: "Miami" },
    { id: 47, date: "2026-06-27", time: "05:30 IST", group: "Group H", team1: "Cape Verde",   team1Flag: "🇨🇻", team2: "Saudi Arabia",team2Flag: "🇸🇦", score1: null, score2: null, status: "upcoming", venue: "NRG Stadium",             city: "Houston" },
    { id: 48, date: "2026-06-27", time: "05:30 IST", group: "Group H", team1: "Uruguay",      team1Flag: "🇺🇾", team2: "Spain",       team2Flag: "🇪🇸", score1: null, score2: null, status: "upcoming", venue: "Estadio Akron",           city: "Guadalajara" },

    // ===== GROUP I =====
    { id: 49, date: "2026-06-17", time: "00:30 IST", group: "Group I", team1: "France",  team1Flag: "🇫🇷", team2: "Senegal", team2Flag: "🇸🇳", score1: 3,    score2: 1,    status: "completed", venue: "MetLife Stadium",         city: "New York/New Jersey" },
    { id: 50, date: "2026-06-17", time: "03:30 IST", group: "Group I", team1: "Iraq",    team1Flag: "🇮🇶", team2: "Norway",  team2Flag: "🇳🇴", score1: 1,    score2: 4,    status: "completed", venue: "Gillette Stadium",        city: "Boston" },
    { id: 51, date: "2026-06-23", time: "02:30 IST", group: "Group I", team1: "France",  team1Flag: "🇫🇷", team2: "Iraq",    team2Flag: "🇮🇶", score1: null, score2: null, status: "upcoming", venue: "Lincoln Financial Field", city: "Philadelphia" },
    { id: 52, date: "2026-06-23", time: "05:30 IST", group: "Group I", team1: "Norway",  team1Flag: "🇳🇴", team2: "Senegal", team2Flag: "🇸🇳", score1: null, score2: null, status: "upcoming", venue: "MetLife Stadium",         city: "New York/New Jersey" },
    { id: 53, date: "2026-06-27", time: "00:30 IST", group: "Group I", team1: "Norway",  team1Flag: "🇳🇴", team2: "France",  team2Flag: "🇫🇷", score1: null, score2: null, status: "upcoming", venue: "Gillette Stadium",        city: "Boston" },
    { id: 54, date: "2026-06-27", time: "00:30 IST", group: "Group I", team1: "Senegal", team1Flag: "🇸🇳", team2: "Iraq",    team2Flag: "🇮🇶", score1: null, score2: null, status: "upcoming", venue: "BMO Field",               city: "Toronto" },

    // ===== GROUP J =====
    { id: 55, date: "2026-06-17", time: "06:30 IST", group: "Group J", team1: "Argentina", team1Flag: "🇦🇷", team2: "Algeria",   team2Flag: "🇩🇿", score1: 3,    score2: 0,    status: "completed", venue: "Arrowhead Stadium",       city: "Kansas City" },
    { id: 56, date: "2026-06-17", time: "09:30 IST", group: "Group J", team1: "Austria",   team1Flag: "🇦🇹", team2: "Jordan",    team2Flag: "🇯🇴", score1: null, score2: null, status: "upcoming", venue: "Levi's Stadium",          city: "San Francisco Bay Area" },
    { id: 57, date: "2026-06-22", time: "22:30 IST", group: "Group J", team1: "Argentina", team1Flag: "🇦🇷", team2: "Austria",   team2Flag: "🇦🇹", score1: null, score2: null, status: "upcoming", venue: "AT&T Stadium",            city: "Dallas" },
    { id: 58, date: "2026-06-23", time: "08:30 IST", group: "Group J", team1: "Jordan",    team1Flag: "🇯🇴", team2: "Algeria",   team2Flag: "🇩🇿", score1: null, score2: null, status: "upcoming", venue: "Levi's Stadium",          city: "San Francisco Bay Area" },
    { id: 59, date: "2026-06-28", time: "07:30 IST", group: "Group J", team1: "Algeria",   team1Flag: "🇩🇿", team2: "Austria",   team2Flag: "🇦🇹", score1: null, score2: null, status: "upcoming", venue: "Arrowhead Stadium",       city: "Kansas City" },
    { id: 60, date: "2026-06-28", time: "07:30 IST", group: "Group J", team1: "Jordan",    team1Flag: "🇯🇴", team2: "Argentina", team2Flag: "🇦🇷", score1: null, score2: null, status: "upcoming", venue: "AT&T Stadium",            city: "Dallas" },

    // ===== GROUP K =====
    { id: 61, date: "2026-06-17", time: "22:30 IST", group: "Group K", team1: "Portugal",   team1Flag: "🇵🇹", team2: "DR Congo",   team2Flag: "🇨🇩", score1: null, score2: null, status: "upcoming", venue: "NRG Stadium",             city: "Houston" },
    { id: 62, date: "2026-06-18", time: "07:30 IST", group: "Group K", team1: "Uzbekistan", team1Flag: "🇺🇿", team2: "Colombia",   team2Flag: "🇨🇴", score1: null, score2: null, status: "upcoming", venue: "Estadio Azteca",          city: "Mexico City" },
    { id: 63, date: "2026-06-23", time: "22:30 IST", group: "Group K", team1: "Portugal",   team1Flag: "🇵🇹", team2: "Uzbekistan", team2Flag: "🇺🇿", score1: null, score2: null, status: "upcoming", venue: "NRG Stadium",             city: "Houston" },
    { id: 64, date: "2026-06-24", time: "07:30 IST", group: "Group K", team1: "Colombia",   team1Flag: "🇨🇴", team2: "DR Congo",   team2Flag: "🇨🇩", score1: null, score2: null, status: "upcoming", venue: "Estadio Akron",           city: "Guadalajara" },
    { id: 65, date: "2026-06-28", time: "05:00 IST", group: "Group K", team1: "Colombia",   team1Flag: "🇨🇴", team2: "Portugal",   team2Flag: "🇵🇹", score1: null, score2: null, status: "upcoming", venue: "Hard Rock Stadium",       city: "Miami" },
    { id: 66, date: "2026-06-28", time: "05:00 IST", group: "Group K", team1: "DR Congo",   team1Flag: "🇨🇩", team2: "Uzbekistan", team2Flag: "🇺🇿", score1: null, score2: null, status: "upcoming", venue: "Mercedes-Benz Stadium",  city: "Atlanta" },

    // ===== GROUP L =====
    { id: 67, date: "2026-06-18", time: "01:30 IST", group: "Group L", team1: "England", team1Flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", team2: "Croatia", team2Flag: "🇭🇷", score1: null, score2: null, status: "upcoming", venue: "AT&T Stadium",            city: "Dallas" },
    { id: 68, date: "2026-06-18", time: "04:30 IST", group: "Group L", team1: "Ghana",   team1Flag: "🇬🇭", team2: "Panama",  team2Flag: "🇵🇦", score1: null, score2: null, status: "upcoming", venue: "BMO Field",               city: "Toronto" },
    { id: 69, date: "2026-06-24", time: "01:30 IST", group: "Group L", team1: "England", team1Flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", team2: "Ghana",   team2Flag: "🇬🇭", score1: null, score2: null, status: "upcoming", venue: "Gillette Stadium",        city: "Boston" },
    { id: 70, date: "2026-06-24", time: "04:30 IST", group: "Group L", team1: "Panama",  team1Flag: "🇵🇦", team2: "Croatia", team2Flag: "🇭🇷", score1: null, score2: null, status: "upcoming", venue: "BMO Field",               city: "Toronto" },
    { id: 71, date: "2026-06-28", time: "02:30 IST", group: "Group L", team1: "Panama",  team1Flag: "🇵🇦", team2: "England", team2Flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score1: null, score2: null, status: "upcoming", venue: "MetLife Stadium",         city: "New York/New Jersey" },
    { id: 72, date: "2026-06-28", time: "02:30 IST", group: "Group L", team1: "Croatia", team1Flag: "🇭🇷", team2: "Ghana",   team2Flag: "🇬🇭", score1: null, score2: null, status: "upcoming", venue: "Lincoln Financial Field", city: "Philadelphia" },
];

let currentStatusFilter = 'upcoming';
let currentGroupFilter  = 'all';
let currentDateFilter   = null;
let currentTimezone     = 'IST';

// teamsData and teamSlugs loaded from teams-data.js

// ── Timezone ──────────────────────────────────────────────
const TIMEZONES = {
    // Asia
    IST:  { label: 'IST — India (+5:30)',              offset:  330 },
    // Gulf
    GST:  { label: 'GST — UAE / Oman (+4)',            offset:  240 },
    IRST: { label: 'IRST — Iran (+3:30)',               offset:  210 },
    AST:  { label: 'AST — Saudi / Qatar / Kuwait (+3)',offset:  180 },
    // Europe (summer — June 2026)
    EEST: { label: 'EEST — Istanbul / Athens (+3)',    offset:  180 },
    CEST: { label: 'CEST — Paris / Berlin / Madrid (+2)', offset: 120 },
    BST:  { label: 'BST — London (+1)',                offset:   60 },
    GMT:  { label: 'GMT — UTC (0)',                    offset:    0 },
    // Americas
    EST:  { label: 'EST — New York (-5)',               offset: -300 },
    CST:  { label: 'CST — Mexico City (-6)',            offset: -360 },
    PST:  { label: 'PST — Los Angeles (-8)',            offset: -480 },
};
const IST_OFFSET = 330;

function convertTime(istTimeStr) {
    const clean = istTimeStr.replace(/\s*IST\s*/, '');
    const [h, m] = clean.split(':').map(Number);
    const istMin  = h * 60 + m;
    const utcMin  = istMin - IST_OFFSET;
    const tzOff   = TIMEZONES[currentTimezone].offset;
    let   tgt     = ((utcMin + tzOff) % 1440 + 1440) % 1440;
    const th = String(Math.floor(tgt / 60)).padStart(2, '0');
    const tm = String(tgt % 60).padStart(2, '0');
    return `${th}:${tm} ${currentTimezone}`;
}

// ── Hero Sparkles ─────────────────────────────────────────
function initSparkles() {
    const hero = document.querySelector('.hero-content');
    if (!hero) return;
    for (let i = 0; i < 12; i++) {
        const s = document.createElement('div');
        s.className = 'sparkle';
        s.style.cssText = `
            left:${10 + Math.random() * 80}%;
            top:${5 + Math.random() * 90}%;
            animation-delay:${(Math.random() * 3).toFixed(2)}s;
            animation-duration:${(1.8 + Math.random() * 2).toFixed(2)}s;
            width:${2 + Math.random() * 3}px;
            height:${2 + Math.random() * 3}px;
        `;
        hero.appendChild(s);
    }
}

// ── Hero Countdown ────────────────────────────────────────
function initHeroCountdown() {
    const el = document.getElementById('hero-countdown');
    if (!el) return;

    function pad(n) { return String(n).padStart(2, '0'); }

    function tick() {
        const now  = Date.now();
        const next = fixturesData
            .filter(f => f.status === 'upcoming')
            .map(f => {
                const [h, m] = f.time.replace(/\s*IST\s*/, '').split(':').map(Number);
                const utcMs  = new Date(f.date + 'T00:00:00Z').getTime()
                             + (h * 60 + m - IST_OFFSET) * 60000;
                return { f, utcMs };
            })
            .filter(({ utcMs }) => utcMs > now)
            .sort((a, b) => a.utcMs - b.utcMs)[0];

        if (!next) { el.innerHTML = ''; return; }

        const diff = next.utcMs - now;
        const hrs  = Math.floor(diff / 3600000);
        const mins = Math.floor((diff % 3600000) / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        const { f } = next;

        el.innerHTML = `
            <span class="cd-label">Next Match</span>
            <span class="cd-teams">${f.team1Flag} ${f.team1} vs ${f.team2} ${f.team2Flag}</span>
            <span class="cd-timer">${pad(hrs)}:${pad(mins)}:${pad(secs)}</span>`;
    }

    tick();
    setInterval(tick, 1000);
}

// ── Particle Background ───────────────────────────────────
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');

    let W, H;
    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const COUNT = Math.min(70, Math.floor((W * H) / 14000));
    const MAX_D = 130;

    const pts = Array.from({ length: COUNT }, () => ({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r:  Math.random() * 1.6 + 0.8,
        gold: Math.random() > 0.72,
    }));

    function tick() {
        ctx.clearRect(0, 0, W, H);

        for (let i = 0; i < pts.length; i++) {
            for (let j = i + 1; j < pts.length; j++) {
                const dx = pts[i].x - pts[j].x;
                const dy = pts[i].y - pts[j].y;
                const d  = Math.sqrt(dx * dx + dy * dy);
                if (d < MAX_D) {
                    ctx.globalAlpha = (1 - d / MAX_D) * 0.18;
                    ctx.strokeStyle = '#5a9cf5';
                    ctx.lineWidth   = 0.6;
                    ctx.beginPath();
                    ctx.moveTo(pts[i].x, pts[i].y);
                    ctx.lineTo(pts[j].x, pts[j].y);
                    ctx.stroke();
                }
            }
        }

        ctx.globalAlpha = 1;
        pts.forEach(p => {
            ctx.beginPath();
            ctx.fillStyle = p.gold ? 'rgba(255,215,0,.65)' : 'rgba(90,156,245,.65)';
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();

            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;
        });

        requestAnimationFrame(tick);
    }

    tick();
}

// ── Scroll Progress Bar ───────────────────────────────────
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = Math.min(pct, 100) + '%';
    }, { passive: true });
}

// ── Floating Flag Rain ────────────────────────────────────
function initFloatingFlags() {
    const hero = document.querySelector('.hero-header');
    if (!hero) return;
    const flags = [...new Set(fixturesData.flatMap(f => [f.team1Flag, f.team2Flag]))];
    flags.forEach(flag => {
        const el = document.createElement('span');
        el.className = 'float-flag';
        el.textContent = flag;
        el.style.cssText = `left:${2 + Math.random()*96}%;animation-delay:${(Math.random()*12).toFixed(1)}s;animation-duration:${(10+Math.random()*8).toFixed(1)}s;font-size:${(1.1+Math.random()*1.1).toFixed(1)}rem`;
        hero.appendChild(el);
    });
}

// ── Per-card Countdown ────────────────────────────────────
function timeUntil(fixture) {
    const diff = getMatchUtcMs(fixture) - Date.now();
    if (diff <= 0) return null;
    const totalMins = Math.floor(diff / 60000);
    const d = Math.floor(totalMins / 1440);
    const h = Math.floor((totalMins % 1440) / 60);
    const m = totalMins % 60;
    if (d > 0) return `in ${d}d ${h}h`;
    if (h > 0) return `in ${h}h ${m}m`;
    return `in ${m}m`;
}

// ── Top Scorers ───────────────────────────────────────────
function calculateTopScorers() {
    const map = {};
    for (const [id, events] of Object.entries(matchEvents)) {
        const f = fixturesData.find(x => x.id === Number(id));
        if (!f) continue;
        events.filter(e => e.type === 'goal').forEach(e => {
            const team = e.team === 1 ? f.team1 : f.team2;
            const flag = e.team === 1 ? f.team1Flag : f.team2Flag;
            const key  = `${e.player}||${team}`;
            if (!map[key]) map[key] = { name: e.player, team, flag, goals: 0 };
            map[key].goals++;
        });
    }
    return Object.values(map).sort((a, b) => b.goals - a.goals).slice(0, 10);
}

function renderTopScorers() {
    const container = document.getElementById('scorers-container');
    if (!container) return;
    const scorers = calculateTopScorers();
    if (!scorers.length) { container.innerHTML = '<p style="color:var(--text2);text-align:center;padding:40px 0">No goals recorded yet</p>'; return; }

    const podium = scorers.slice(0, 3).map((s, i) => `
        <div class="podium-card rank-${i+1}">
            <div class="podium-rank">${['🥇','🥈','🥉'][i]}</div>
            <div class="podium-flag">${s.flag}</div>
            <div class="podium-name">${s.name}</div>
            <div class="podium-team">${s.team}</div>
            <div class="podium-goals">${s.goals}<span>⚽</span></div>
        </div>`).join('');

    const list = scorers.slice(3).map((s, i) => `
        <div class="scorer-row">
            <span class="scorer-rank">${i + 4}</span>
            <span class="scorer-flag">${s.flag}</span>
            <span class="scorer-name">${s.name}</span>
            <span class="scorer-team">${s.team}</span>
            <span class="scorer-goals">${s.goals} ⚽</span>
        </div>`).join('');

    container.innerHTML = `
        <div class="podium-wrap">${podium}</div>
        ${list ? `<div class="scorers-list">${list}</div>` : ''}`;
}

// ── My Team ───────────────────────────────────────────────
let myTeam           = localStorage.getItem('myTeam') || null;
let myTeamFilterMode = false; // true = show only my team's matches

function getMyTeamFlag() {
    if (!myTeam) return '';
    const f = fixturesData.find(x => x.team1 === myTeam || x.team2 === myTeam);
    return f ? (f.team1 === myTeam ? f.team1Flag : f.team2Flag) : '';
}

function setupMyTeam() {
    const btn      = document.getElementById('myteam-btn');
    const dropdown = document.getElementById('myteam-dropdown');
    if (!btn) return;

    function updateBtn() {
        if (myTeam) {
            const flag = getMyTeamFlag();
            btn.innerHTML = `
                <span class="myteam-flag-label">${flag} ${myTeam}</span>
                <span class="myteam-filter-toggle" id="myteam-filter-toggle" title="Show only my team's matches">
                    ${myTeamFilterMode ? '📌 My Matches ✓' : '📌 My Matches'}
                </span>
                <span class="myteam-clear" id="myteam-clear" title="Remove favourite">✕</span>`;
            btn.classList.add('selected');
            btn.classList.toggle('filter-active', myTeamFilterMode);
        } else {
            btn.innerHTML = '⭐ My Team';
            btn.classList.remove('selected', 'filter-active');
            myTeamFilterMode = false;
        }
    }

    function buildDropdown() {
        const teams = [...new Set(fixturesData.flatMap(f => [f.team1, f.team2]))].sort();
        dropdown.innerHTML = `
            <div class="myteam-search-wrap"><input class="myteam-search" id="myteam-search" placeholder="Search country…" autocomplete="off"></div>
            <div class="myteam-list" id="myteam-list">
            ${teams.map(t => {
                const f = fixturesData.find(x => x.team1 === t || x.team2 === t);
                const flag = f ? (f.team1 === t ? f.team1Flag : f.team2Flag) : '';
                return `<button class="myteam-item${t === myTeam ? ' selected' : ''}" data-team="${t}">${flag} ${t}</button>`;
            }).join('')}
            </div>`;

        dropdown.querySelectorAll('.myteam-item').forEach(item => {
            item.addEventListener('click', () => {
                myTeam = item.dataset.team;
                myTeamFilterMode = false;
                localStorage.setItem('myTeam', myTeam);
                closeDropdown();
                updateBtn();
                renderFixtures();
            });
        });

        const search = document.getElementById('myteam-search');
        if (search) {
            search.addEventListener('input', () => {
                const q = search.value.toLowerCase();
                dropdown.querySelectorAll('.myteam-item').forEach(item => {
                    item.style.display = item.dataset.team.toLowerCase().includes(q) ? '' : 'none';
                });
            });
        }
    }

    function openDropdown() {
        buildDropdown();
        dropdown.classList.add('open');
        setTimeout(() => { const s = document.getElementById('myteam-search'); if (s) s.focus(); }, 50);
    }
    function closeDropdown() {
        dropdown.classList.remove('open');
    }

    btn.addEventListener('click', e => {
        e.stopPropagation();

        // ✕ — clear team
        const clearBtn = document.getElementById('myteam-clear');
        if (clearBtn && clearBtn.contains(e.target)) {
            myTeam = null;
            myTeamFilterMode = false;
            localStorage.removeItem('myTeam');
            updateBtn();
            renderFixtures();
            return;
        }

        // 📌 — toggle "My Matches" filter
        const filterToggle = document.getElementById('myteam-filter-toggle');
        if (filterToggle && filterToggle.contains(e.target)) {
            if (!myTeam) return;
            myTeamFilterMode = !myTeamFilterMode;
            updateBtn();
            renderFixtures();
            return;
        }

        // team name label — open picker if no team, or open picker to change
        if (!myTeam) {
            dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
        } else {
            const flagLabel = btn.querySelector('.myteam-flag-label');
            if (flagLabel && flagLabel.contains(e.target)) {
                dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
            }
        }
    });
    document.addEventListener('click', () => closeDropdown());
    dropdown.addEventListener('click', e => e.stopPropagation());

    updateBtn();
}

// ── Bootstrap ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initSparkles();
    initHeroCountdown();
    buildDateStrip();
    renderFixtures();

    updateStatistics();
    setupFilterButtons();
    setupGroupSelect();
    setupTimezone();
    setupNavigation();
    setupGroupTabs();
    renderGroupStandings('Group A');
    renderAllGroups();
    initScrollReveal();
    initSearch();
    setupModal();
    setupPlayerPopup();
    initScrollProgress();
    initFloatingFlags();
    renderTopScorers();
    setupMyTeam();

    // Re-render fixtures every 30s to flip cards to LIVE when kickoff arrives
    setInterval(() => { renderFixtures(); updateStatistics(); renderTopScorers(); }, 30000);
});

// ── Navigation ───────────────────────────────────────────
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const target = document.querySelector(link.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Bottom nav active state on click
    document.querySelectorAll('.bn-item').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelectorAll('.bn-item').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// ── Timezone Selector ─────────────────────────────────────
const TZ_GROUPS = [
    { icon: '🌏', label: 'Asia',            keys: ['IST'] },
    { icon: '🌍', label: 'Gulf',            keys: ['GST','IRST','AST'] },
    { icon: '🌍', label: 'Europe (Summer)', keys: ['EEST','CEST','BST','GMT'] },
    { icon: '🌎', label: 'Americas',        keys: ['EST','CST','PST'] },
];

function setupTimezone() {
    const picker   = document.getElementById('tz-picker');
    const btn      = document.getElementById('tz-btn');
    const dropdown = document.getElementById('tz-dropdown');
    const abbrEl   = document.getElementById('tz-btn-abbr');
    const regionEl = document.getElementById('tz-btn-region');
    if (!picker) return;

    function getRegion(label) { return label.split('—')[1]?.split('(')[0]?.trim() || label; }

    function buildDropdown() {
        dropdown.innerHTML = TZ_GROUPS.map(g => `
            <div class="tz-group">
                <div class="tz-group-label">${g.icon} ${g.label}</div>
                ${g.keys.map(k => {
                    const tz  = TIMEZONES[k];
                    const off = tz.offset >= 0 ? `+${Math.floor(tz.offset/60)}${tz.offset%60?':'+String(tz.offset%60).padStart(2,'0'):''}` : `-${Math.floor(-tz.offset/60)}${(-tz.offset)%60?':'+String((-tz.offset)%60).padStart(2,'0'):''}`;
                    const city = tz.label.split('—')[1]?.split('(')[0]?.trim() || k;
                    return `<button class="tz-option ${k === currentTimezone ? 'selected' : ''}" data-key="${k}" role="option">
                        <span class="tz-opt-abbr">${k}</span>
                        <span class="tz-opt-city">${city}</span>
                        <span class="tz-opt-off">${off}</span>
                        ${k === currentTimezone ? '<span class="tz-check">✓</span>' : ''}
                    </button>`;
                }).join('')}
            </div>`
        ).join('');

        dropdown.querySelectorAll('.tz-option').forEach(opt => {
            opt.addEventListener('click', () => {
                currentTimezone = opt.dataset.key;
                abbrEl.textContent   = currentTimezone;
                regionEl.textContent = getRegion(TIMEZONES[currentTimezone].label);
                closeDropdown();
                buildDropdown();
                renderFixtures();
            });
        });
    }

    function openDropdown() {
        dropdown.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        btn.classList.add('active');
    }
    function closeDropdown() {
        dropdown.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('active');
    }

    btn.addEventListener('click', e => {
        e.stopPropagation();
        dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
    });
    document.addEventListener('click', () => closeDropdown());
    dropdown.addEventListener('click', e => e.stopPropagation());

    buildDropdown();
}

// ── Date Strip ────────────────────────────────────────────
function buildDateStrip() {
    const container = document.getElementById('date-strip');
    if (!container) return;

    const today = new Date().toISOString().slice(0, 10);
    const dates = [...new Set(fixturesData.map(f => f.date))].sort();
    const DAY_NAMES = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    const allBtn = document.createElement('button');
    allBtn.className = 'date-pill active';
    allBtn.id = 'date-strip-all';
    allBtn.textContent = 'All';
    allBtn.addEventListener('click', () => {
        currentDateFilter = null;
        container.querySelectorAll('.date-pill').forEach(p => p.classList.remove('active'));
        allBtn.classList.add('active');
        renderFixtures();
    });
    container.appendChild(allBtn);

    let todayBtn = null;
    dates.forEach(dateStr => {
        const d       = new Date(dateStr + 'T12:00:00');
        const isPast  = dateStr < today;
        const isToday = dateStr === today;
        const btn     = document.createElement('button');
        btn.className   = 'date-pill' + (isPast ? ' past' : '') + (isToday ? ' today' : '');
        btn.dataset.date = dateStr;
        btn.innerHTML   = `<span class="dp-day">${isToday ? 'Today' : DAY_NAMES[d.getDay()]}</span><span class="dp-num">${d.getDate()}</span>`;
        btn.addEventListener('click', () => {
            currentDateFilter = dateStr;
            container.querySelectorAll('.date-pill').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            currentStatusFilter = 'all';
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            renderFixtures();
        });
        container.appendChild(btn);
        if (isToday) todayBtn = btn;
    });

    // Scroll strip so today is visible on load
    if (todayBtn) {
        requestAnimationFrame(() => todayBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }));
    }
}

function teamFifaLink(name, flag) {
    const slug = teamSlugs[name];
    const base = 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams';
    if (!slug) return `<span>${flag}</span> ${name}`;
    return `<a class="gc-team-link" href="${base}/${slug}/squad" target="_blank" rel="noopener noreferrer"><span>${flag}</span> ${name}</a>`;
}

// ── All Groups Grid ───────────────────────────────────────
function renderAllGroups() {
    const container = document.getElementById('all-groups-grid');
    if (!container) return;

    const groups = ['A','B','C','D','E','F','G','H','I','J','K','L'];
    container.innerHTML = groups.map(g => {
        const name     = `Group ${g}`;
        const standings = calculateGroupStandings(name);
        const rows = standings.map((t, i) => {
            const gd    = t.gf - t.ga;
            const gdStr = gd > 0 ? `+${gd}` : `${gd}`;
            const qual  = i < 2 ? 'gq' : '';
            return `<tr class="${qual}">
                <td class="gc-pos">${i + 1}</td>
                <td class="gc-team">${teamFifaLink(t.name, t.flag)}</td>
                <td>${t.p}</td>
                <td>${t.pts}</td>
                <td class="gc-gd">${gdStr}</td>
            </tr>`;
        }).join('');
        return `
            <div class="group-card" data-group="${g}">
                <div class="group-card-header">
                    Group ${g}
                    <span class="group-card-nav-hint">Standings ›</span>
                </div>
                <table class="group-card-table">
                    <thead><tr>
                        <th>#</th><th class="gc-team">Team</th>
                        <th title="Played">P</th>
                        <th title="Points">Pts</th>
                        <th title="Goal Difference">GD</th>
                    </tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>`;
    }).join('');

    container.addEventListener('click', e => {
        if (e.target.closest('a')) return;
        const card = e.target.closest('.group-card');
        if (!card) return;
        navigateToGroupStandings(card.dataset.group);
    });
}

function navigateToGroupStandings(groupLetter) {
    const groupName = `Group ${groupLetter}`;
    document.querySelectorAll('.group-tab').forEach(t => t.classList.remove('active'));
    const tab = document.querySelector(`.group-tab[data-group="${groupName}"]`);
    if (tab) tab.classList.add('active');
    renderGroupStandings(groupName);
    document.getElementById('group-tabs').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Filters ──────────────────────────────────────────────
function setupFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentStatusFilter = btn.getAttribute('data-filter');

            // Upcoming/Completed are independent of date strip — clear it
            if (currentStatusFilter !== 'all') {
                currentDateFilter = null;
                document.querySelectorAll('.date-pill').forEach(p => p.classList.remove('active'));
                const allDateBtn = document.getElementById('date-strip-all');
                if (allDateBtn) allDateBtn.classList.add('active');
            }

            renderFixtures();
        });
    });
}

function setupGroupSelect() {
    const sel = document.getElementById('group-select');
    if (sel) sel.addEventListener('change', () => { currentGroupFilter = sel.value; renderFixtures(); });
}

// ── Search ────────────────────────────────────────────────
function initSearch() {
    const input = document.getElementById('search-input');
    if (input) input.addEventListener('input', () => renderFixtures());
}

// ── Render Fixtures ───────────────────────────────────────
function getISTDateStr(offsetDays = 0) {
    return new Date(Date.now() + (330 + offsetDays * 1440) * 60000).toISOString().slice(0, 10);
}

function renderFixtures() {
    const container = document.getElementById('fixtures');
    container.innerHTML = '';

    const search = (document.getElementById('search-input')?.value || '').toLowerCase().trim();

    // My Matches mode — override all other filters, show full schedule for selected team
    if (myTeam && myTeamFilterMode) {
        const flag = getMyTeamFlag();
        let filtered = fixturesData.filter(f => f.team1 === myTeam || f.team2 === myTeam);
        filtered = [...filtered].sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));

        const hdr = document.createElement('div');
        hdr.className = 'mymatches-header';
        hdr.innerHTML = `<span class="mymatches-flag">${flag}</span>
            <span class="mymatches-title">${myTeam} — Full Schedule</span>
            <span class="mymatches-count">${filtered.length} matches</span>`;
        container.appendChild(hdr);

        filtered.forEach((fixture, i) => {
            const card = createFixtureCard(fixture);
            card.style.animationDelay = `${Math.min(i * 40, 400)}ms`;
            container.appendChild(card);
        });
        return;
    }

    let filtered = fixturesData;
    if (currentStatusFilter === 'upcoming')  filtered = filtered.filter(f => f.status === 'upcoming');
    if (currentStatusFilter === 'completed') filtered = filtered.filter(f => f.status === 'completed');
    if (currentGroupFilter  !== 'all')       filtered = filtered.filter(f => f.group === currentGroupFilter);
    if (currentDateFilter)                   filtered = filtered.filter(f => f.date === currentDateFilter);
    if (search) filtered = filtered.filter(f =>
        f.team1.toLowerCase().includes(search) || f.team2.toLowerCase().includes(search)
    );

    if (currentStatusFilter === 'completed') {
        filtered = [...filtered].sort((a, b) => b.date.localeCompare(a.date) || b.time.localeCompare(a.time));
    } else {
        filtered = [...filtered].sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
    }

    // Upcoming with no date/search selected → show only today + tomorrow (Match Day view)
    const isMatchDayView = currentStatusFilter === 'upcoming' && !currentDateFilter && !search;
    if (isMatchDayView) {
        const today    = getISTDateStr(0);
        const tomorrow = getISTDateStr(1);
        const near = filtered.filter(f => f.date === today || f.date === tomorrow);
        if (near.length) filtered = near;
        // else fall through to show all upcoming (tournament hasn't started or is over)
    }

    if (!filtered.length) {
        container.innerHTML = `<div class="empty-state"><p>No matches found.</p></div>`;
        return;
    }

    if (isMatchDayView && filtered.length) {
        // Group by date with "TODAY" / "TOMORROW" headers
        const today    = getISTDateStr(0);
        const tomorrow = getISTDateStr(1);
        const byDate   = {};
        filtered.forEach(f => { (byDate[f.date] = byDate[f.date] || []).push(f); });

        Object.keys(byDate).sort().forEach(date => {
            const label = date === today ? 'Today' : date === tomorrow ? 'Tomorrow' : '';
            const d     = new Date(date + 'T12:00:00Z');
            const dayName = d.toLocaleDateString('en-US', { weekday: 'long' });
            const dateFmt = d.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

            const hdr = document.createElement('div');
            hdr.className = 'match-day-header';
            hdr.innerHTML = `
                <span class="mdh-tag">${label}</span>
                <span class="mdh-day">${dayName}</span>
                <span class="mdh-date">${dateFmt}</span>`;
            container.appendChild(hdr);

            byDate[date].forEach((fixture, i) => {
                const card = createFixtureCard(fixture);
                card.style.animationDelay = `${Math.min(i * 40, 400)}ms`;
                container.appendChild(card);
            });
        });
    } else {
        filtered.forEach((fixture, i) => {
            const card = createFixtureCard(fixture);
            card.style.animationDelay = `${Math.min(i * 40, 400)}ms`;
            container.appendChild(card);
        });
    }
}

// ── Live Match Detection ──────────────────────────────────
function getMatchUtcMs(fixture) {
    const [h, m] = fixture.time.replace(/\s*IST\s*/, '').split(':').map(Number);
    return new Date(fixture.date + 'T00:00:00Z').getTime() + (h * 60 + m - IST_OFFSET) * 60000;
}

function isMatchLive(fixture) {
    if (fixture.status === 'completed') return false;
    const kickoff = getMatchUtcMs(fixture);
    const now     = Date.now();
    return now >= kickoff && now <= kickoff + 115 * 60000; // up to 115 min window
}

// ── Fixture Card ──────────────────────────────────────────
function createFixtureCard(fixture) {
    const live = isMatchLive(fixture);
    const card = document.createElement('div');
    card.className = `fixture-card ${live ? 'live' : fixture.status}`;

    if (myTeam && (fixture.team1 === myTeam || fixture.team2 === myTeam)) {
        card.classList.add('my-team-card');
    }

    const dateObj = new Date(fixture.date + 'T12:00:00');
    const fmtDate = dateObj.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' });

    const scoreHtml = fixture.status === 'completed'
        ? `<div class="score-box"><div class="score">${fixture.score1}&nbsp;-&nbsp;${fixture.score2}</div><div class="vs-text">FULL TIME</div></div>`
        : live
            ? `<div class="score-box live-score-box"><div class="score">–</div><div class="vs-text live-pulse">● LIVE</div></div>`
            : `<div class="score-box"><div class="score">vs</div><div class="vs-text">UPCOMING</div></div>`;

    const statusHtml = fixture.status === 'completed'
        ? `<span class="match-status completed">✓ FT</span>`
        : live
            ? `<span class="match-status live-badge"><span class="live-dot-sm"></span> LIVE NOW</span>`
            : (() => { const t = timeUntil(fixture); return `<span class="match-status upcoming">${t ? `⏱ ${t}` : '⏱ Soon'}</span>`; })();

    const isMyTeamCard = myTeam && (fixture.team1 === myTeam || fixture.team2 === myTeam);
    const myTeamBadge  = isMyTeamCard ? `<span class="my-team-badge">⭐ My Team</span>` : '';

    card.innerHTML = `
        <div class="match-header">
            <div class="match-date">${fmtDate} · ${convertTime(fixture.time)}</div>
            <div class="match-header-right">${myTeamBadge}<div class="match-group-badge">${fixture.group}</div></div>
        </div>
        <div class="match-container">
            <div class="team">
                <span class="team-flag">${fixture.team1Flag}</span>
                <div class="team-name">${fixture.team1}</div>
            </div>
            ${scoreHtml}
            <div class="team">
                <span class="team-flag">${fixture.team2Flag}</span>
                <div class="team-name">${fixture.team2}</div>
            </div>
        </div>
        <div class="match-footer">
            <div class="match-venue">📍 ${fixture.venue}, ${fixture.city}</div>
            ${statusHtml}
        </div>`;

    // mouse-follow radial glow
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width  * 100).toFixed(1)}%`);
        card.style.setProperty('--my', `${((e.clientY - r.top)  / r.height * 100).toFixed(1)}%`);
    });

    // open detail modal on click
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openModal(fixture));

    return card;
}

// ── Count-Up Animation ────────────────────────────────────
function countUp(el, target, duration = 1100) {
    if (!el) return;
    const start = parseInt(el.textContent) || 0;
    const t0 = performance.now();
    const tick = now => {
        const p = Math.min((now - t0) / duration, 1);
        el.textContent = Math.round(start + (target - start) * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
}

// ── Statistics ────────────────────────────────────────────
function updateStatistics() {
    const total    = fixturesData.length;
    const played   = fixturesData.filter(f => f.status === 'completed').length;
    const goals    = fixturesData.filter(f => f.status === 'completed').reduce((s, f) => s + f.score1 + f.score2, 0);
    const upcoming = fixturesData.filter(f => f.status === 'upcoming').length;
    const teams    = new Set([...fixturesData.map(f => f.team1), ...fixturesData.map(f => f.team2)]).size;

    countUp(document.getElementById('total-matches-stat'),    total);
    countUp(document.getElementById('matches-played-stat'),   played);
    countUp(document.getElementById('total-goals-stat'),      goals);
    countUp(document.getElementById('upcoming-matches-stat'), upcoming);
    countUp(document.getElementById('hero-matches'),          total);
    countUp(document.getElementById('hero-goals'),            goals);
    countUp(document.getElementById('hero-teams'),            teams);
}


// ── Scroll Reveal ─────────────────────────────────────────
function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
        revealEls.forEach(el => el.classList.add('visible'));
        return;
    }

    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
        });
    }, { threshold: 0.04, rootMargin: '0px 0px -20px 0px' });

    revealEls.forEach(el => io.observe(el));

    // Safety fallback — if any element hasn't revealed after 1.5s, force it visible
    setTimeout(() => {
        revealEls.forEach(el => { if (!el.classList.contains('visible')) el.classList.add('visible'); });
    }, 1500);
}

// ── Group Tabs ────────────────────────────────────────────
function setupGroupTabs() {
    document.querySelectorAll('.group-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.group-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderGroupStandings(tab.getAttribute('data-group'));
        });
    });
}

// ── Standings Calculation ─────────────────────────────────
function calculateGroupStandings(groupName) {
    const matches = fixturesData.filter(f => f.group === groupName);
    const teams   = {};

    matches.forEach(f => {
        if (!teams[f.team1]) teams[f.team1] = { name: f.team1, flag: f.team1Flag, p:0, w:0, d:0, l:0, gf:0, ga:0, pts:0 };
        if (!teams[f.team2]) teams[f.team2] = { name: f.team2, flag: f.team2Flag, p:0, w:0, d:0, l:0, gf:0, ga:0, pts:0 };
    });

    matches.filter(f => f.status === 'completed').forEach(f => {
        const t1 = teams[f.team1], t2 = teams[f.team2];
        t1.p++; t2.p++;
        t1.gf += f.score1; t1.ga += f.score2;
        t2.gf += f.score2; t2.ga += f.score1;
        if      (f.score1 > f.score2) { t1.w++; t1.pts += 3; t2.l++; }
        else if (f.score2 > f.score1) { t2.w++; t2.pts += 3; t1.l++; }
        else                           { t1.d++; t1.pts++;    t2.d++; t2.pts++; }
    });

    return Object.values(teams).sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        const gd = (b.gf - b.ga) - (a.gf - a.ga);
        if (gd !== 0) return gd;
        return b.gf - a.gf;
    });
}

// ── Render Standings Table ────────────────────────────────
function renderGroupStandings(groupName) {
    const container = document.getElementById('standings-table-container');
    const standings = calculateGroupStandings(groupName);

    const rows = standings.map((t, i) => {
        const gd       = t.gf - t.ga;
        const gdClass  = gd > 0 ? 'gd-positive' : gd < 0 ? 'gd-negative' : 'gd-zero';
        const gdStr    = gd > 0 ? `+${gd}` : `${gd}`;
        const rowClass = i < 2 ? 'qualifies' : '';
        return `
            <tr class="${rowClass}">
                <td><span class="pos-badge pos-${i+1}">${i+1}</span></td>
                <td class="col-team">
                    <div class="team-cell">
                        <span class="team-cell-flag">${t.flag}</span>
                        ${(() => { const slug = teamSlugs[t.name]; const url = slug ? `https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams/${slug}/squad` : null; return url ? `<a class="team-cell-name team-cell-link" href="${url}" target="_blank" rel="noopener noreferrer">${t.name}</a>` : `<span class="team-cell-name">${t.name}</span>`; })()}
                    </div>
                </td>
                <td>${t.p}</td>
                <td>${t.w}</td>
                <td>${t.d}</td>
                <td>${t.l}</td>
                <td>${t.gf}</td>
                <td>${t.ga}</td>
                <td class="${gdClass}">${gdStr}</td>
                <td class="pts-cell">${t.pts}</td>
            </tr>`;
    }).join('');

    container.innerHTML = `
        <div class="standings-table-wrap">
            <table class="standings-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th class="col-team">Team</th>
                        <th title="Played">P</th>
                        <th title="Won">W</th>
                        <th title="Drawn">D</th>
                        <th title="Lost">L</th>
                        <th title="Goals For">GF</th>
                        <th title="Goals Against">GA</th>
                        <th title="Goal Difference">GD</th>
                        <th title="Points">PTS</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
        </div>`;
}

// ── Utility: update score programmatically ────────────────
function updateFixtureScore(fixtureId, score1, score2) {
    const f = fixturesData.find(x => x.id === fixtureId);
    if (!f) return;
    f.score1 = score1; f.score2 = score2; f.status = 'completed';
    renderFixtures();
    updateStatistics();
}

// ── Match Events Data ────────────────────────────────────
const matchEvents = {
    1: [
        { type: 'goal',   team: 1, player: 'Quiñones',       minute: '9'    },
        { type: 'goal',   team: 1, player: 'R. Jiménez',     minute: '67'   },
        { type: 'red',    team: 2, player: 'Sithole',        minute: '49'   },
        { type: 'red',    team: 2, player: 'Zwane',          minute: '84'   },
        { type: 'red',    team: 1, player: 'Montes',         minute: '90+2' },
    ],
    2: [
        { type: 'goal',   team: 2, player: 'Krejčí',         minute: '59'   },
        { type: 'goal',   team: 1, player: 'Hwang Inbeom',   minute: '67'   },
        { type: 'goal',   team: 1, player: 'Oh Hyeongyu',    minute: '80'   },
        { type: 'yellow', team: 1, player: 'Lee Gi-hyuk',    minute: '89'   },
    ],
    7: [
        { type: 'goal',   team: 2, player: 'Lukić',          minute: '21'   },
        { type: 'yellow', team: 2, player: 'Katić',          minute: '65'   },
        { type: 'goal',   team: 1, player: 'Larin',          minute: '78'   },
    ],
    8: [
        { type: 'goal',   team: 2, player: 'Embolo (P)',     minute: '17'   },
        { type: 'goal',   team: 1, player: 'Khoukhi',        minute: '90+4' },
    ],
    13: [
        { type: 'goal',   team: 2, player: 'Saibari',        minute: '21'   },
        { type: 'goal',   team: 1, player: 'Vinícius Jr',    minute: '32'   },
    ],
    14: [
        { type: 'goal',   team: 2, player: 'McGinn',         minute: '28'   },
    ],
    19: [
        { type: 'og',     team: 1, player: 'Bobadilla',      minute: '7'    },
        { type: 'goal',   team: 1, player: 'Balogun',        minute: '31'   },
        { type: 'goal',   team: 1, player: 'Balogun',        minute: '45+5' },
        { type: 'goal',   team: 2, player: 'Mauricio',       minute: '73'   },
        { type: 'goal',   team: 1, player: 'Reyna',          minute: '90+8' },
        { type: 'yellow', team: 2, player: 'Arce',           minute: '88'   },
        { type: 'yellow', team: 2, player: 'Alonso',         minute: '90+3' },
    ],
    20: [
        { type: 'goal',   team: 1, player: 'Irankunda',      minute: '27'   },
        { type: 'goal',   team: 1, player: 'Metcalfe',       minute: '75'   },
    ],
    25: [
        { type: 'goal',   team: 1, player: 'Nmecha',         minute: '6'    },
        { type: 'goal',   team: 2, player: 'Comenencia',     minute: '21'   },
        { type: 'goal',   team: 1, player: 'Schlotterbeck',  minute: '38'   },
        { type: 'goal',   team: 1, player: 'Havertz (P)',    minute: '45+5' },
        { type: 'goal',   team: 1, player: 'Musiala',        minute: '47'   },
        { type: 'goal',   team: 1, player: 'Brown',          minute: '68'   },
        { type: 'goal',   team: 1, player: 'Undav',          minute: '78'   },
        { type: 'goal',   team: 1, player: 'Havertz',        minute: '88'   },
    ],
    26: [
        { type: 'goal',   team: 1, player: 'Diallo',         minute: '90'   },
    ],
    31: [
        { type: 'goal',   team: 1, player: 'Van Dijk',       minute: '50'   },
        { type: 'goal',   team: 2, player: 'Nakamura',       minute: '57'   },
        { type: 'goal',   team: 1, player: 'Summerville',    minute: '64'   },
        { type: 'goal',   team: 2, player: 'Kamada',         minute: '88'   },
    ],
    32: [
        { type: 'goal',   team: 1, player: 'Ayari',          minute: '7'    },
        { type: 'goal',   team: 1, player: 'Isak',           minute: '30'   },
        { type: 'goal',   team: 2, player: 'Rekik',          minute: '43'   },
        { type: 'goal',   team: 1, player: 'Gyökeres',       minute: '59'   },
        { type: 'goal',   team: 1, player: 'Svanberg',       minute: '84'   },
        { type: 'goal',   team: 1, player: 'Ayari',          minute: '90+6' },
    ],
    37: [
        { type: 'goal',   team: 2, player: 'Just',           minute: '7'    },
        { type: 'goal',   team: 1, player: 'Rezaeian',       minute: '33'   },
        { type: 'goal',   team: 2, player: 'Just',           minute: '54'   },
        { type: 'goal',   team: 1, player: 'Mohebbi',        minute: '64'   },
    ],
    38: [
        { type: 'goal',   team: 2, player: 'Ashour',         minute: '19'   },
        { type: 'og',     team: 1, player: 'Hany',           minute: '66'   },
    ],
    44: [
        { type: 'goal',   team: 1, player: 'Al-Amri',        minute: '41'   },
        { type: 'goal',   team: 2, player: 'Araujo',         minute: '80'   },
    ],
    49: [
        { type: 'goal',   team: 1, player: 'Mbappé',         minute: '66'   },
        { type: 'goal',   team: 1, player: 'Barcola',        minute: '82'   },
        { type: 'goal',   team: 2, player: 'I. Mbaye',       minute: '90+5' },
        { type: 'goal',   team: 1, player: 'Mbappé',         minute: '90+6' },
    ],
    50: [
        { type: 'goal',   team: 2, player: 'Haaland',        minute: '29'   },
        { type: 'goal',   team: 1, player: 'A. Hussein',     minute: '39'   },
        { type: 'goal',   team: 2, player: 'Haaland',        minute: '43'   },
        { type: 'goal',   team: 2, player: 'Østigård',       minute: '76'   },
        { type: 'og',     team: 1, player: 'A. Hussein',     minute: '90+6' },
    ],
    55: [
        { type: 'goal',   team: 1, player: 'Messi',          minute: '17'   },
        { type: 'goal',   team: 1, player: 'Messi',          minute: '60'   },
        { type: 'goal',   team: 1, player: 'Messi',          minute: '76'   },
    ],
};

// ── Match Highlights (Official FIFA) ─────────────────────
const matchHighlights = {
    1:  'https://www.fifa.com/en/watch/7wv3jFr0T2wczSuQbhgrSW',
    2:  'https://www.fifa.com/en/watch/1iidGe97khg8lmdSRopdh4',
    7:  'https://www.fifa.com/en/watch/5ekSKA6XJZqv9Fag9pI7sH',
    8:  'https://www.fifa.com/en/watch/NdoxOQqn5cnkmfioABvsL',
    13: 'https://www.fifa.com/en/watch/1e8ayUzYWGZDbZUEU42bgQ',
    14: 'https://www.fifa.com/en/watch/1amePIIN9Rt7kvMwQGMPke',
    19: 'https://www.fifa.com/en/watch/6jzgitUqP6YyXpwwuY6VRc',
    20: 'https://www.fifa.com/en/watch/6qvmyR3k0BcpuPrSmer7Mf',
    25: 'https://www.fifa.com/en/watch/3MSlsbd2rcnTGlcG4jhpdR',
    26: 'https://www.fifa.com/en/watch/4P79SuyJHO3ZGVuRYxjots',
    31: 'https://www.fifa.com/en/watch/hfEd1R54PslEMX4Rqb0EP',
    32: 'https://www.fifa.com/en/watch/1xJ82g9ocfLQaweWUFgFMw',
    37: 'https://www.fifa.com/en/watch/5c6T3T7Y1XfKrT3aXzJRqL',
    38: 'https://www.fifa.com/en/watch/2XSqobMgEwKFuhEozWztJl',
    43: 'https://www.fifa.com/en/watch/jLS5YXPMr0XAd5lMHtbiJ',
    44: 'https://www.fifa.com/en/watch/2OO54UvFW7GK8vnsarneGk',
};

function buildEventsSection(fixture) {
    const events = matchEvents[fixture.id];
    if (!events || events.length === 0) return '';

    const t1 = events.filter(e => e.team === 1);
    const t2 = events.filter(e => e.team === 2);

    const icon = e => {
        if (e.type === 'goal' || e.type === 'og') return '⚽';
        if (e.type === 'yellow') return '<span class="ev-card ev-yellow"></span>';
        if (e.type === 'red')    return '<span class="ev-card ev-red"></span>';
        return '';
    };

    const nameHtml = e => e.type === 'og'
        ? `${e.player} <span class="ev-og">OG</span>`
        : e.player;

    const buildCol = list => list.length === 0
        ? `<span class="ev-none">–</span>`
        : list.map(e => `
            <div class="ev-item">
                ${icon(e)}
                <span class="ev-name">${nameHtml(e)}</span>
                <span class="ev-min">${e.minute}'</span>
            </div>`).join('');

    return `
        <div class="events-section">
            <div class="events-label">Match Events</div>
            <div class="events-cols">
                <div class="events-col ev-col-1">
                    <div class="events-col-head">${fixture.team1Flag}</div>
                    ${buildCol(t1)}
                </div>
                <div class="events-col-sep"></div>
                <div class="events-col ev-col-2">
                    <div class="events-col-head">${fixture.team2Flag}</div>
                    ${buildCol(t2)}
                </div>
            </div>
        </div>
        <div class="modal-divider"></div>`;
}

// ── Match Detail Modal ────────────────────────────────────
function buildPlayerCard(p) {
    const posClass = { GK:'pos-gk', DEF:'pos-def', MID:'pos-mid', FWD:'pos-fwd' }[p.pos] || 'pos-mid';
    const posColor = { GK:'#FFD700', DEF:'#64b5f6', MID:'#00e676', FWD:'#ff5252' }[p.pos] || '#fff';
    const avatarInner = p.img
        ? `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
        + `<span style="display:none">#${p.num}</span>`
        : `#${p.num}`;
    const safeName = p.name.replace(/'/g, '&#39;');
    const safeImg  = (p.img || '').replace(/'/g, '&#39;');
    return `
        <div class="player-card" onclick="openPlayerPopup('${safeName}',${p.num},'${p.pos}','${safeImg}')">
            <div class="player-avatar ${posClass}">${avatarInner}</div>
            <div class="player-info">
                <span class="player-name">${p.name}</span>
                <span class="player-pos-badge" style="color:${posColor}">${p.pos}</span>
            </div>
        </div>`;
}

function openPlayerPopup(name, num, pos, img) {
    const posClass = { GK:'pos-gk', DEF:'pos-def', MID:'pos-mid', FWD:'pos-fwd' }[pos] || 'pos-mid';
    const posColor = { GK:'#FFD700', DEF:'#64b5f6', MID:'#00e676', FWD:'#ff5252' }[pos] || '#fff';
    const photoHtml = img
        ? `<img src="${img}" alt="${name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span style="display:none">#${num}</span>`
        : `#${num}`;
    document.getElementById('player-popup-content').innerHTML = `
        <div class="pp-photo ${posClass}">${photoHtml}</div>
        <div class="pp-num">#${num}</div>
        <div class="pp-name">${name}</div>
        <div class="pp-pos" style="color:${posColor}">${pos}</div>`;
    document.getElementById('player-popup-overlay').classList.add('open');
}

function closePlayerPopup() {
    document.getElementById('player-popup-overlay').classList.remove('open');
}

function setupPlayerPopup() {
    document.getElementById('player-popup-close').addEventListener('click', closePlayerPopup);
    document.getElementById('player-popup-overlay').addEventListener('click', e => {
        if (e.target === document.getElementById('player-popup-overlay')) closePlayerPopup();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closePlayerPopup(); });
}

function buildTeamPanel(teamName, teamFlag) {
    const data = teamsData[teamName];
    const slug = teamSlugs[teamName];
    const fifaUrl = slug
        ? `https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams/${slug}/squad`
        : null;
    const fifaLinkHtml = fifaUrl
        ? `<a class="fifa-squad-link" href="${fifaUrl}" target="_blank" rel="noopener noreferrer">
               View Full Squad on FIFA.com ↗
           </a>`
        : '';

    if (!data) {
        return `<div class="modal-panel">
            <div class="panel-header">
                <span class="modal-flag">${teamFlag}</span>
                <span class="modal-team-name">${teamName}</span>
            </div>
            ${fifaLinkHtml}
            <p style="color:var(--text2);padding:24px 0;text-align:center;font-size:.9rem">Squad data coming soon</p>
        </div>`;
    }
    const players = data.players.map(buildPlayerCard).join('');
    return `
        <div class="modal-panel">
            <div class="panel-header">
                <span class="modal-flag">${teamFlag}</span>
                <span class="modal-team-name">${teamName}</span>
            </div>
            ${fifaLinkHtml}
            <div class="players-list">${players}</div>
        </div>`;
}

function openModal(fixture) {
    const overlay = document.getElementById('modal-overlay');
    const content = document.getElementById('modal-content');

    const fmtDate = new Date(fixture.date + 'T12:00:00').toLocaleDateString('en-IN', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    const scoreHtml = fixture.status === 'completed'
        ? `<span class="modal-score">${fixture.score1}</span>
           <span class="modal-score-sep">–</span>
           <span class="modal-score">${fixture.score2}</span>`
        : `<span class="modal-score-vs">VS</span>`;

    const hlUrl = matchHighlights[fixture.id];
    const highlightsBtnHtml = (fixture.status === 'completed' && hlUrl)
        ? `<a class="highlights-btn" href="${hlUrl}" target="_blank" rel="noopener noreferrer">
               <svg class="yt-icon" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10 8.5l6 3.5-6 3.5V8.5z"/></svg>
               Watch Official Highlights
           </a>`
        : '';

    content.innerHTML = `
        <div class="modal-header">
            <div class="modal-group-badge">${fixture.group} · Group Stage</div>
            <div class="modal-teams-row">
                <span class="modal-big-flag">${fixture.team1Flag}</span>
                <div class="modal-score-block">${scoreHtml}</div>
                <span class="modal-big-flag">${fixture.team2Flag}</span>
            </div>
            <div class="modal-meta-strip">
                <span>📍 ${fixture.venue}, ${fixture.city}</span>
                <span>📅 ${fmtDate}</span>
                <span>🕐 ${convertTime(fixture.time)}</span>
                <span>${fixture.status === 'completed' ? '✅ Full Time' : '⏱ Upcoming'}</span>
            </div>
            ${highlightsBtnHtml}
        </div>
        <div class="modal-divider"></div>
        ${fixture.status === 'completed' ? buildEventsSection(fixture) : ''}
        <div class="modal-panels">
            ${buildTeamPanel(fixture.team1, fixture.team1Flag)}
            <div class="panel-separator"></div>
            ${buildTeamPanel(fixture.team2, fixture.team2Flag)}
        </div>`;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('match-modal').scrollTop = 0;
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

function setupModal() {
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', e => {
        if (e.target === document.getElementById('modal-overlay')) closeModal();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}
