# YouTube Clone

A modern YouTube clone built with React.js, Material-UI, and Vite. This application replicates core YouTube functionality including video browsing, search, and video playback.

## 🌐 Live Demo

**[View Live Application](https://dariogeorge21.github.io/react-youtube-clone/)**

The application is deployed on GitHub Pages and fully functional!

## 🚀 Features

- **Video Listing**: Browse videos in a responsive grid layout
- **Video Player**: Watch videos with embedded YouTube player
- **Search Functionality**: Search videos by title, description, or channel name
- **Responsive Design**: Optimized for desktop and mobile devices
- **Material-UI Components**: Modern and consistent UI design
- **React Router**: Client-side routing for seamless navigation
- **Mock Data**: Pre-loaded with sample video content

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Vite** - Build tool and development server
- **Material-UI (MUI)** - UI component library
- **React Router DOM** - Client-side routing
- **Emotion** - CSS-in-JS styling (MUI dependency)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd youtube-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Project Structure

```
youtube-clone/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   └── Header.jsx          # Navigation header with search
│   │   ├── VideoCard/
│   │   │   └── VideoCard.jsx       # Individual video card component
│   │   ├── VideoGrid/
│   │   │   └── VideoGrid.jsx       # Grid layout for video cards
│   │   └── VideoPlayer/
│   │       └── VideoPlayer.jsx     # Video player with metadata
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.jsx            # Home page with video grid
│   │   ├── VideoPage/
│   │   │   └── VideoPage.jsx       # Individual video page
│   │   └── SearchPage/
│   │       └── SearchPage.jsx      # Search results page
│   ├── data/
│   │   └── mockData.js             # Mock video data and utilities
│   ├── App.jsx                     # Main app component with routing
│   └── main.jsx                    # Application entry point
├── public/
├── package.json
└── README.md
```

## 🎯 Core Components

### Header Component
- YouTube-like navigation bar
- Search functionality with form submission
- Logo click navigation to home
- Material-UI AppBar with responsive design

### VideoCard Component
- Displays video thumbnail, title, and metadata
- Channel avatar and information
- View count and upload time
- Click navigation to video page
- Hover effects for better UX

### VideoGrid Component
- Responsive grid layout using Material-UI Grid
- Handles empty states
- Configurable title display
- Optimized for different screen sizes

### VideoPlayer Component
- Embedded YouTube video player
- Video metadata display
- Like, dislike, and share buttons
- Channel information with subscribe button
- Related videos sidebar

## 🔍 Features in Detail

### Search Functionality
- Real-time search through video titles, descriptions, and channel names
- URL-based search queries for shareable links
- Search results page with result count
- Case-insensitive search implementation

### Responsive Design
- Mobile-first approach
- Breakpoint-based grid system
- Adaptive navigation and layout
- Touch-friendly interface

### Routing
- Home page (`/`) - Main video grid
- Video page (`/video/:id`) - Individual video player
- Search page (`/search?q=query`) - Search results

## 🎨 Styling and Theme

The application uses Material-UI's theming system with:
- Custom color palette
- Consistent typography
- Component-level style overrides
- Responsive breakpoints
- Light theme with YouTube-inspired colors

## 📱 Responsive Breakpoints

- **xs**: 0px and up (mobile)
- **sm**: 600px and up (tablet)
- **md**: 900px and up (small desktop)
- **lg**: 1200px and up (desktop)
- **xl**: 1536px and up (large desktop)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

This project is automatically deployed to GitHub Pages. The deployment process:

### GitHub Pages Deployment (Current)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to gh-pages branch**
   ```bash
   # Switch to gh-pages branch
   git checkout -b gh-pages

   # Copy built files to root
   cp -r dist/* .

   # Remove source files and commit built files
   git rm -rf src public package.json package-lock.json vite.config.js eslint.config.js
   git add index.html assets/ vite.svg
   git commit -m "Deploy to GitHub Pages"

   # Push to GitHub
   git push origin gh-pages
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - The app will be available at: `https://dariogeorge21.github.io/react-youtube-clone/`

### Alternative Deployment Options

Deploy the `dist` folder to your preferred hosting service:
- Vercel
- Netlify
- Firebase Hosting
- Surge.sh

## 🔮 Future Enhancements

- Integration with YouTube Data API
- User authentication and profiles
- Video upload functionality
- Comments system
- Playlist creation and management
- Dark mode toggle
- Video recommendations algorithm
- Progressive Web App (PWA) features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- YouTube for design inspiration
- Material-UI team for the excellent component library
- React team for the amazing framework
- Vite team for the fast build tool
