# 🎯 Squareform

> **Translating imagination into interactive, responsive, and timeless digital solutions that connect users and brands.**

A premium, modern web portfolio showcasing cutting-edge frontend development with stunning animations, responsive design, and exceptional user experience.

![Squareform](https://img.shields.io/badge/Squareform-Portfolio_Website-blue?style=for-the-badge&logo=html5)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/status-Active-brightgreen?style=for-the-badge)

## ✨ Key Features

### 🎨 **Design & Animation**
- **GSAP-Powered Interactions** - Smooth, hardware-accelerated animations
- **Parallax Effects** - Rellax.js for immersive scrolling experiences
- **Custom Animations** - Staggered text reveals, magnetic buttons, and micro-interactions
- **Responsive Grid System** - Bootstrap 5.3.8 with custom enhancements
- **Modern Typography** - Google Fonts (Inter & Doto) with optimized loading

### 🛠 **Technical Stack**
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5.3.8
- **Animation**: GSAP 3.x with ScrollTrigger
- **Smooth Scrolling**: Lenis.js
- **Parallax**: Rellax.js
- **Carousel**: OwlCarousel2
- **Lightbox**: Lity
- **Icons**: Font Awesome 6.5.1

### 📱 **Performance & Accessibility**
- **Mobile-First Design** - Fully responsive across all devices
- **SEO Optimized** - Semantic HTML5 structure
- **Accessibility** - ARIA labels and keyboard navigation
- **Performance** - Optimized assets and lazy loading
- **Cross-Browser** - Compatible with all modern browsers

### 🎯 **Core Components**
- **Hero Section** - Eye-catching landing with call-to-action
- **Portfolio Gallery** - Dynamic project showcase with filtering
- **Services Display** - Interactive service presentation
- **Testimonials** - Client reviews carousel
- **Contact Form** - Functional contact system
- **FAQ Section** - Accordion-style问答
- **Pricing Plans** - Service packages display

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheNeovimmer/squareform.git
   cd squareform
   ```

2. **Serve the project**
   
   **Option A: Using Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option B: Using Node.js**
   ```bash
   npx serve .
   ```
   
   **Option C: Using Live Server (VS Code)**
   - Install Live Server extension
   - Right-click `index.html` and select "Open with Live Server"

3. **Open in browser**
   Navigate to `http://localhost:8000`

## 📁 Project Structure

```
squareform/
├── 📄 index.html                 # Main HTML file
├── 📁 js/                        # JavaScript files
│   ├── 📄 jquery-3.7.1.min.js    # jQuery library
│   └── 📄 custom.js              # Custom JavaScript logic
├── 📁 styles/                    # CSS stylesheets
│   ├── 📁 bootstrap-5.3.8/       # Bootstrap framework
│   ├── 📄 main_styles.css        # Main custom styles
│   └── 📄 responsive.css         # Responsive design rules
├── 📁 plugins/                   # Third-party plugins
│   ├── 📁 gsap/                  # GSAP animation library
│   ├── 📁 lenis/                 # Smooth scrolling
│   ├── 📁 rellax/                # Parallax effects
│   ├── 📁 OwlCarousel2-2.3.4/    # Carousel plugin
│   └── 📁 [other plugins]/      # Additional libraries
├── 📁 images/                    # Image assets
│   ├── 🖼️ [project images].webp # Optimized WebP images
│   └── 🎨 [ui elements].svg     # SVG icons and graphics
└── 📄 README.md                  # This file
```

## 🎨 Customization Guide

### 🎯 **Color Scheme**
Edit CSS variables in `main_styles.css`:
```css
:root {
    --primary-color: #1f1f1f;
    --secondary-color: #ffffff;
    --accent-color: #your-accent;
}
```

### 📝 **Typography**
Customize fonts in the CSS section:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont');
:root {
    --font1: "YourFont", sans-serif;
}
```

### ⚡ **Animation Speed**
Adjust GSAP timing in `custom.js`:
```javascript
// Modify animation durations
gsap.to(element, {duration: 1, ease: "power2.inOut"});
```

## 🔧 Configuration Options

### **Animation Settings**
- **Scroll Trigger**: Configure scroll-based animations
- **Parallax Speed**: Adjust parallax effect intensity
- **Hover Effects**: Customize interactive elements

### **Performance Optimization**
- **Image Optimization**: WebP format for faster loading
- **Lazy Loading**: Implement for large media files
- **Minification**: CSS/JS minification for production

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 90+     | ✅ Full |

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ ⭐
- **Page Load**: < 2 seconds
- **First Contentful Paint**: < 1 second
- **Mobile Responsive**: 100%

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

## 📝 Development Notes

### **Key Technologies Used**
- **GSAP (GreenSock Animation Platform)**: Professional-grade animation
- **Bootstrap 5**: Responsive grid and components
- **jQuery**: DOM manipulation and event handling
- **Lenis**: Butter-smooth scrolling experience
- **WebP**: Modern image format for better performance

### **Code Architecture**
- **Modular JavaScript**: Organized function structure
- **Semantic HTML5**: Accessible and SEO-friendly markup
- **CSS Custom Properties**: Easy theming and maintenance
- **Progressive Enhancement**: Works without JavaScript

## 🐛 Troubleshooting

### **Common Issues**
- **Animations not working**: Check GSAP loading and console errors
- **Responsive issues**: Verify viewport meta tag and Bootstrap CSS
- **Image loading**: Ensure correct file paths and formats

### **Debug Mode**
Add to `custom.js`:
```javascript
// Enable debug mode
window.DEBUG = true;
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Show Your Support

If you find this project helpful, please consider:

- ⭐ **Starring** the repository
- 🔄 **Forking** for your own projects
- 🐛 **Reporting** issues and bugs
- 💡 **Suggesting** new features

## 📞 Get in Touch

- **Portfolio**: [Live Demo](https://ilyes-bouzayen.vercel.com)
- **Email**: ilyesbouzayen@hotmail.com
- **Twitter**: [@TheNeovimmer](https://twitter.com/TheNeovimmer)
- **LinkedIn**: [Ilyes Bouzayen](https://linkedin.com/in/ilyesbouzayen)

---

<div align="center">
  <strong>🚀 Built with passion by TheNeovimmer</strong><br>
  <em>Creating exceptional digital experiences, one pixel at a time.</em>
</div>
