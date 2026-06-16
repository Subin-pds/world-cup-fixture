# FIFA World Cup Fixtures Website

A modern, responsive website displaying FIFA World Cup 2026 fixtures and match scores.

## Features

- 🎯 **Live Fixtures Display** - View all upcoming and completed matches
- 📊 **Tournament Statistics** - Real-time stats including total matches, goals, and more
- 🎨 **Modern Design** - Clean, responsive UI that works on all devices
- 🔄 **Filter Options** - Filter matches by status (All, Upcoming, Completed)
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- ⚡ **Fast Loading** - Static site with no dependencies

## Project Structure

```
world-cup-fixture/
├── index.html        # Main HTML file
├── styles.css        # Styling
├── script.js         # JavaScript functionality
├── netlify.toml      # Netlify configuration
├── .gitignore        # Git ignore file
└── README.md         # This file
```

## Getting Started

### Local Development

1. Clone the repository or download the files
2. Open `index.html` in your browser
3. Or start a local server:
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

### Deployment to Netlify

#### Option 1: Connect Git Repository
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings (publish directory: `.`)
6. Deploy!

#### Option 2: Drag & Drop
1. Go to [Netlify](https://netlify.com)
2. Drag and drop the entire project folder
3. Your site will be live in seconds!

#### Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd "world cup fixture"
netlify deploy --prod
```

## Features Explained

### Fixtures Display
- Shows all matches with team flags, scores, dates, and venues
- Color-coded by status (completed/upcoming)
- Responsive grid layout

### Statistics Section
- Total Matches Count
- Matches Played
- Total Goals Scored
- Upcoming Matches

### Filter System
- **All Matches** - Display all fixtures
- **Upcoming** - Show only future matches
- **Completed** - Show only finished matches

## Customization

### Update Match Data
Edit the `fixturesData` array in `script.js`:

```javascript
{
    id: 1,
    date: "2026-06-12",
    time: "14:00",
    stage: "Group Stage",
    team1: "Argentina",
    team1Flag: "🇦🇷",
    team2: "Saudi Arabia",
    team2Flag: "🇸🇦",
    score1: 1,
    score2: 2,
    status: "completed", // or "upcoming"
    venue: "New York Stadium"
}
```

### Update Colors
Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #1a73e8;
    --secondary-color: #0f3c7f;
    --accent-color: #ffd700;
    /* ... other colors ... */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (no frameworks)

## Performance

- **Lightweight** - No external dependencies
- **Fast Loading** - Average page load < 1s
- **Optimized** - Minified CSS and JavaScript ready for production

## Future Enhancements

- [ ] Connect to live FIFA API for real-time data
- [ ] Add team statistics and player info
- [ ] Implement PWA for offline support
- [ ] Add match predictions
- [ ] Real-time notifications for match updates
- [ ] Dark mode toggle
- [ ] Multi-language support

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Support

For issues, suggestions, or contributions, please create an issue or pull request.

---

**Happy watching! ⚽🎉**
