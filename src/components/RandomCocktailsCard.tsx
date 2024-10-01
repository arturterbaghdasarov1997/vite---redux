import React from 'react';
import { Drink } from '../interfaces/cocktail.interface';
import { useNavigate } from 'react-router-dom';

interface RandomCocktailCardProps {
  cocktail: Drink;
}

const RandomCocktailsCard: React.FC<RandomCocktailCardProps> = ({cocktail: {idDrink, strDrink, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3}}) => {
    const navigate = useNavigate();


  return (
    <div className='cocktail-card' onClick={() => navigate(`/cocktails/${idDrink}`)}>
      <div className='img-box'>
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div>
        <h2>{strDrink}</h2>
      </div>
    </div>
  );
};

export default RandomCocktailsCard;
