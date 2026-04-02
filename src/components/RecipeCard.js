import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';

function RecipeCard({ recipe, onViewDetails }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="200"
        image={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <CardContent>
        <Typography variant="h6" component="div" noWrap>
          {recipe.strMeal}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.strArea} Cuisine
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onViewDetails(recipe)}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default RecipeCard;
