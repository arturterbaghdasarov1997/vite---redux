import React from 'react'
import { Drink } from '../interfaces/cocktail.interface'

interface cocktailCardProps {
  cocktail: Drink
}

const CocktailCard:React.FC<cocktailCardProps> = ({cocktail: {idDrink, strDrink, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3}}) => {

  return (
    <div className='cocktail-card'>
      <div className='img-box'>
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div>
        <h2>{strDrink}</h2>
        <p>{strIngredient1}</p>
        <p>{strIngredient2}</p>
        <p>{strIngredient3}</p>
      </div>
    </div>
  )
}

export default CocktailCard