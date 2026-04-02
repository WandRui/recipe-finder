import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, List, ListItem } from '@mui/material';

function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  // Parse ingredients (they're in separate fields)
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure || ''} ${ingredient}`.trim());
    }
  }

  return (
    <Dialog open={!!recipe} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{recipe.strMeal}</DialogTitle>
      <DialogContent dividers>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Ingredients:</Typography>
          <List>
            {ingredients.map((item, index) => (
              <ListItem key={index} sx={{ py: 0 }}>
                <Typography>{item}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Typography variant="h6">Instructions:</Typography>
          <Typography>{recipe.strInstructions}</Typography>
        </Box>
        {recipe.strYoutube && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Video Tutorial:</Typography>
            <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
              Watch on YouTube
            </a>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default RecipeModal;
