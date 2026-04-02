import React, { useState } from 'react';
import { Container, CircularProgress, Box, Alert } from '@mui/material';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeModal from './components/RecipeModal';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchRecipes = async (searchTerm) => {
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      
      if (response.data.meals) {
        setRecipes(response.data.meals);
      } else {
        setRecipes([]);
        setError('No recipes found. Try a different search term!');
      }
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <Header onSearch={searchRecipes} />
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {error && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <RecipeList recipes={recipes} onViewDetails={handleViewDetails} />
        )}
        
        {selectedRecipe && (
          <RecipeModal recipe={selectedRecipe} onClose={handleCloseModal} />
        )}
      </Container>
    </div>
  );
}

export default App;
