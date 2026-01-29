# Experiment 2: React UI Frameworks and Components

This experiment demonstrates the implementation of modern UI frameworks and component libraries in React applications. The experiment is divided into four sub-experiments, each focusing on different UI frameworks and patterns.

## 📚 Overview

This experiment explores:
- Bootstrap integration in React
- Bootstrap Grid System and Components
- Material-UI (MUI) Components and Theming
- React Router with Responsive Navigation

## 🗂️ Sub-Experiments

### Exp 2.1: Bootstrap Basics in React
**Focus**: Introduction to Bootstrap integration with React

**Key Features**:
- Bootstrap navigation bar with responsive design
- Card components with styling
- Form components with Bootstrap classes
- Basic responsive layout using Bootstrap utility classes

**Technologies Used**:
- React 19.2.4
- Bootstrap 5.3.x
- Bootstrap CSS integration

**Files**: 
- `exp2.1/src/App.js` - Main component with navbar, cards, and forms
- `exp2.1/src/index.js` - Application entry point

---

### Exp 2.2: Bootstrap Grid System & Cards
**Focus**: Advanced Bootstrap grid layouts and card components

**Key Features**:
- Responsive grid system (1-2-3 column layout)
- Multiple card components with images
- Dynamic data rendering using array mapping
- Card components with various button styles
- Responsive design across different screen sizes

**Technologies Used**:
- React 19.2.4
- Bootstrap 5.3.x
- Unsplash images for card content

**Data Structure**: 
- 6 course cards with titles, descriptions, images, and CTAs
- Courses include: Web Development, Data Science, Mobile App Development, UI/UX Design, Cyber Security, Cloud Computing

**Files**:
- `exp2.2/src/App.js` - Grid layout with dynamic card rendering

---

### Exp 2.3: Material-UI (MUI) Components
**Focus**: Material Design implementation using MUI library

**Key Features**:
- Material-UI component library integration
- Custom theme configuration
- Dark mode toggle functionality
- Responsive drawer navigation
- Product cards with ratings and chips
- Search functionality with filtering
- Snackbar notifications
- Linear progress indicators
- Material icons integration

**Technologies Used**:
- React 19.2.4
- Material-UI (@mui/material)
- Material Icons (@mui/icons-material)
- Custom MUI theme (theme.js)

**Components Used**:
- AppBar, Toolbar, Drawer
- Card, CardContent, CardActions, CardMedia
- TextField, Switch, Button
- Rating, Chip, Alert, Snackbar
- Grid, Container, Box, Paper
- Linear Progress

**Files**:
- `exp2.3/src/App.js` - Main application with MUI components
- `exp2.3/src/theme.js` - Custom Material-UI theme configuration

---

### Exp 2.4: React Router with Responsive Navigation
**Focus**: Client-side routing with Bootstrap responsive navigation

**Key Features**:
- React Router DOM integration (v7.13.0)
- Multi-page navigation (Home, Products, About, Contact, Services)
- Responsive Bootstrap navbar with mobile toggle
- Dropdown menu with sub-navigation
- Active link styling with NavLink
- Sticky navigation bar
- Hero section with gradient background
- Feature cards with hover effects
- Collapsible navigation for mobile devices

**Technologies Used**:
- React 19.2.4
- React Router DOM 7.13.0
- Bootstrap 5.3.8
- React Bootstrap 2.10.10
- Bootstrap Icons

**Routes Implemented**:
- `/` - Home page
- `/products` - Products page
- `/about` - About Us page
- `/contact` - Contact page
- `/services` - Services page

**Files**:
- `exp2.4/src/App.js` - Router configuration and navigation
- `exp2.4/src/App.css` - Custom styles and animations
- `exp2.4/public/index.html` - Bootstrap Icons CDN integration

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

For each sub-experiment (exp2.1, exp2.2, exp2.3, exp2.4):

```bash
# Navigate to the experiment directory
cd Exp2/exp2.x

# Install dependencies
npm install

# Start the development server
npm start

# Build for production
npm run build
```

The application will run on `http://localhost:3000`

## 📦 Common Dependencies

All experiments use:
- `react` and `react-dom` (v19.2.4)
- `react-scripts` (5.0.1)
- `web-vitals` for performance monitoring

**Exp 2.1 & 2.2 specific**:
- `bootstrap` (5.3.x)

**Exp 2.3 specific**:
- `@mui/material`
- `@mui/icons-material`
- `@emotion/react`
- `@emotion/styled`

**Exp 2.4 specific**:
- `bootstrap` (5.3.8)
- `react-bootstrap` (2.10.10)
- `react-router-dom` (7.13.0)
- `bootstrap-icons`

## 💡 Learning Outcomes

By completing this experiment, you will learn:

1. **Bootstrap Integration**: How to integrate Bootstrap CSS framework in React applications
2. **Grid System**: Responsive layout design using Bootstrap's 12-column grid
3. **Component Libraries**: Using pre-built UI component libraries (Bootstrap, MUI)
4. **Material Design**: Implementing Google's Material Design principles
5. **Theming**: Creating and applying custom themes to UI components
6. **Routing**: Client-side routing with React Router
7. **Responsive Design**: Creating mobile-first, responsive user interfaces
8. **State Management**: Managing component state for interactive features
9. **Navigation Patterns**: Implementing different navigation patterns (navbar, drawer, dropdown)
10. **CSS-in-JS**: Working with styled components and custom CSS

## 🎨 UI Frameworks Comparison

| Framework | Pros | Use Case | Experiment |
|-----------|------|----------|------------|
| **Bootstrap** | Easy to learn, extensive documentation, quick prototyping | General-purpose websites, MVPs | 2.1, 2.2, 2.4 |
| **Material-UI** | Rich components, Material Design, customizable theming | Enterprise applications, modern web apps | 2.3 |

## 📱 Responsive Breakpoints

All experiments follow responsive design principles:

- **Mobile**: < 576px (1 column)
- **Tablet**: 576px - 991px (2 columns)
- **Desktop**: ≥ 992px (3 columns)

## 🛠️ Available Scripts

In each experiment directory:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📝 Notes

- All experiments are created using Create React App
- Material-UI (exp2.3) uses a custom theme defined in `theme.js`
- Exp2.4 uses React Router v7 with the new routing API
- Bootstrap Icons CDN is used in exp2.4 for icon support
- Images are sourced from Unsplash for demonstration purposes

## 🔗 Useful Resources

- [React Documentation](https://react.dev/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Material-UI Documentation](https://mui.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Create React App Documentation](https://create-react-app.dev/)

## 👨‍💻 Author

**Student ID**: 23BAI70093  
**Course**: Full Stack Development 2 (FSD-2)  
**Semester**: 6th Semester  
**Academic Year**: 2023-2024

---

**Repository**: [Dueyash/23AML-2B-23BAI70093-FSD-2](https://github.com/Dueyash/23AML-2B-23BAI70093-FSD-2)