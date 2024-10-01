import React, { useEffect } from 'react';
import { useFetchCocktailQuery } from '../store/cocktails/cocktail.api';
import { useParams } from 'react-router-dom';
import '../scss/cocktail.scss';

const CocktailPage: React.FC = () => {
    const { idDrink } = useParams();
    const drinkId = Number(idDrink);

    if (isNaN(drinkId)) {
        return <h1>Invalid cocktail ID.</h1>;
    }

    const { data, isLoading, isError, error } = useFetchCocktailQuery(drinkId);

    useEffect(() => {
        console.log('idDrink param:', idDrink);
    }, [idDrink]);

    useEffect(() => {
        if (isError) {
            console.error('API error:', error);
        }
    }, [isError, error]);

    if (isLoading) return <h1>Loading . . .</h1>;
    if (isError) return <h1>Failed to load cocktail data. Please try again later.</h1>;
    if (!data) return <h1>No cocktail data available.</h1>;

    const {
        strDrink,
        strDrinkThumb,
        strInstructions
    } = data;

    type IngredientKeys = `strIngredient${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15}`;

    const ingredients = Array.from({ length: 15 }, (_, i) => {
        const key = `strIngredient${i + 1}` as IngredientKeys;
        return data[key];
    }).filter(ingredient => ingredient);

    return (
        <div className="cocktail-page">
            {strDrinkThumb && <img src={strDrinkThumb} alt={strDrink} />}
            <h1>{strDrink}</h1>
            {strInstructions && (
                <div className="instructions">
                    <h3>Instructions:</h3>
                    <p>{strInstructions}</p>
                </div>
            )}
            <h3>Ingredients:</h3>
            <div className="ingredients">
                {ingredients.map((ingredient, index) => (
                    <p key={index}>{ingredient}</p>
                ))}
            </div>
        </div>
    );
};

export default CocktailPage;