# 🏛️ Digital Gurukulam

A modern, interactive web application for learning Telugu, Sanskrit, and Indian heritage stories. Built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

### 🎓 **Learning Modes**
- **Learn Mode**: Interactive vocabulary learning with pronunciation guides
- **Quiz Mode**: Test your knowledge with instant feedback
- **Story Mode**: Traditional Indian wisdom stories with moral teachings

### 🌐 **Languages Supported**
- **Telugu**: 24 words across 3 difficulty levels
- **Sanskrit**: 24 words across 3 difficulty levels
- Complete with romanization, IPA notation, and cultural context

### 🎯 **Interactive Features**
- Text-to-speech pronunciation
- Speed-adjustable audio playback
- Cultural context explanations
- Progress tracking with statistics
- Achievement system
- Autoplay functionality
- Data export capabilities

### 📊 **Progress Tracking**
- Words learned counter
- Quiz accuracy percentage
- Current learning streak
- Session time tracking
- Progress export (JSON format)

## 🚀 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- No additional dependencies required

### Installation

1. **Clone or download** the repository to your local machine

2. **File Structure Setup**:
```
digital-gurukulam/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All CSS styles
├── js/
│   ├── app.js             # Main application logic
│   ├── vocabulary.js      # Vocabulary data
│   ├── stories.js         # Stories data
│   └── utils.js           # Utility functions
└── README.md              # This file
```

3. **Deploy**: Simply open `index.html` in your web browser or serve through a web server

### GitHub Pages Deployment

1. Push all files to your GitHub repository
2. Go to Settings → Pages
3. Select source branch (usually `main`)
4. Your app will be available at `https://yourusername.github.io/repositoryname`

## 🛠️ File Management Guide

### Core Files

#### `index.html`
- Main HTML structure
- Contains all UI elements
- Links to CSS and JavaScript files
- **Edit when**: Adding new UI components or layouts

#### `css/styles.css`
- Complete styling for the application
- Responsive design and animations
- Earth-tone color scheme
- **Edit when**: Changing appearance, colors, or layout

#### `js/app.js`
- Main application logic and state management
- Event handlers and user interactions
- Progress tracking and storage
- **Edit when**: Adding new features or modifying behavior

#### `js/vocabulary.js`
- Complete vocabulary database
- Word definitions, pronunciations, cultural context
- Organized by language and difficulty
- **Edit when**: Adding new words or languages

#### `js/stories.js`
- Traditional Indian wisdom stories
- Moral teachings and Sanskrit quotes
- **Edit when**: Adding new stories or modifying existing ones

#### `js/utils.js`
- Utility functions for common operations
- Speech synthesis, storage, animations
- **Edit when**: Adding new utility functions

### How to Manage Updates

#### Adding New Vocabulary Words
1. Open `js/vocabulary.js`
2. Find the appropriate language and difficulty section
3. Add new word object with required properties:
```javascript
{
    word: "नया शब्द",
    pronunciation: "[na-ya shab-da]",
    phonetic: "na·ya·shab·da",
    translation: "New Word",
    category: "Learning",
    romanized: "naya shabda",
    ipa: "/nəjə ʃəbdə/",
    context: "Cultural context and explanation"
}
```

#### Adding New Stories
1. Open `js/stories.js`
2. Add new story object to the stories array:
```javascript
{
    title: "Story Title",
    content: "Story content...",
    moral: "Moral lesson with Sanskrit quote",
    sanskritQuote: "Sanskrit text",
    sanskritTranslation: "English translation"
}
```

#### Modifying Styles
1. Open `css/styles.css`
2. Find the relevant CSS class or create new ones
3. Use the existing color variables for consistency

#### Adding New Features
1. Add UI elements to `index.html`
2. Style them in `css/styles.css`
3. Implement functionality in `js/app.js`
4. Use utility functions from `js/utils.js`

## 🎨 Customization

### Color Scheme
The app uses warm earth tones inspired by traditional Sanskrit learning:
- Primary: `#cd853f` (Peru)
- Secondary: `#deb887` (Burlywood)
- Accent: `#a0522d` (Sienna)
- Background: `#f4f1eb` to `#f0e6d6` (Beige gradient)

### Adding New Languages
1. Extend the `vocabularyData` object in `js/vocabulary.js`
2. Add language option to the select element in `index.html`
3. Update the language change handler in `js/app.js`

### Responsive Design
The app is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 📚 Technical Details

### Architecture
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Storage**: localStorage for progress persistence
- **Audio**: Web Speech API for text-to-speech
- **Animations**: CSS animations and JavaScript transitions

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

### Performance Features
- Lazy loading of content
- Efficient DOM manipulation
- Optimized animations
- Local storage for offline functionality

## 🔧 Development

### Local Development
1. Use a local web server (e.g., Live Server extension in VS Code)
2. Make changes to relevant files
3. Test in multiple browsers
4. Commit changes to Git

### Adding Features Checklist
- [ ] Update HTML structure if needed
- [ ] Add/modify CSS styles
- [ ] Implement JavaScript functionality
- [ ] Test on different devices
- [ ] Update documentation
- [ ] Commit changes

### Code Style Guidelines
- Use descriptive variable and function names
- Comment complex logic
- Follow existing naming conventions
- Keep functions small and focused
- Use ES6+ features consistently

## 📖 Educational Content

### Vocabulary Coverage
- **Beginner**: Basic greetings, politeness, daily needs
- **Intermediate**: Family, education, professions, arts
- **Advanced**: Abstract concepts, philosophy, modern terms

### Story Themes
- Humility and wisdom
- Teacher-student relationships
- Nature and philosophy
- Spiritual teachings
- Practical life lessons

## 🤝 Contributing

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Contribution Ideas
- Add new vocabulary words
- Translate to additional languages
- Create new wisdom stories
- Improve UI/UX design
- Add new learning modes
- Enhance accessibility

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Traditional Indian educational systems (Gurukula)
- Sanskrit and Telugu language scholars
- Ancient wisdom literature
- Modern web technologies

## 📞 Support

If you encounter any issues or need help:
1. Check the browser console for errors
2. Ensure all files are properly linked
3. Verify browser compatibility
4. Clear browser cache and try again

---

**Built with ❤️ for preserving and sharing Indian cultural heritage through modern technology.**
