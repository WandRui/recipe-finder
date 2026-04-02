# 🍳 Recipe Finder App

A React application that allows users to search for recipes using TheMealDB API.

## Live Demo

🔗 [View Live App](https://wandrui.github.io/recipe-finder)

## Features

- Search recipes by name or ingredient
- View recipe details including ingredients and instructions
- Responsive design for mobile, tablet, and desktop
- Built with Material-UI for modern styling
- Loading states and error handling
- YouTube video tutorial links (when available)

## Technologies Used

- **React 18** - Frontend framework
- **Material-UI (MUI) v5** - UI component library
- **Axios** - HTTP client for API calls
- **TheMealDB API** - Free recipe database
- **GitHub Pages** - Deployment platform

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone https://github.com/WandRui/recipe-finder.git
```

2. Navigate to project directory:
```bash
cd recipe-finder
```

3. Install dependencies:
```bash
npm install
```

4. Start development server:
```bash
npm start
```

5. Open browser to http://localhost:3000

## Component Structure

- **App** - Main container with state management and API integration
- **Header** - App title and search bar with search functionality
- **RecipeList** - Grid display of recipe cards with responsive layout
- **RecipeCard** - Individual recipe display with image and details button
- **RecipeModal** - Detailed recipe view with ingredients, instructions, and video link

## API

This app uses TheMealDB API:
- Website: https://www.themealdb.com/
- Endpoint: `https://www.themealdb.com/api/json/v1/1/search.php?s=`
- No API key required
- Free for personal and educational use

## Usage

1. Enter a recipe name or ingredient in the search bar (e.g., "pasta", "chicken", "cake")
2. Click "Search" or press Enter
3. Browse through the recipe cards
4. Click "View Details" on any recipe to see:
   - Full ingredient list with measurements
   - Step-by-step cooking instructions
   - YouTube video tutorial (if available)

## Screenshots

### Desktop View
The app displays recipes in a 4-column grid layout on desktop screens.

### Mobile View
Recipes stack vertically on mobile devices for easy scrolling.

## Author

- **Rui**
- GitHub: [@WandRui](https://github.com/WandRui)

## License

This project is open source and available under the MIT License.
