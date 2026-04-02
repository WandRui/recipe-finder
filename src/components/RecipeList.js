import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes, onViewDetails }) {
  if (!recipes || recipes.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6" color="text.secondary">
          Search for recipes to get started!
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {recipes.map((recipe, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <RecipeCard recipe={recipe} onViewDetails={onViewDetails} />
        </Grid>
      ))}
    </Grid>
  );
}

export default RecipeList;
