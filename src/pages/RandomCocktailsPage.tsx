import React from 'react';
import RandomCocktailsCard from '../components/RandomCocktailsCard';
import { useFetchMultipleRandomCocktailsQuery } from '../store/cocktails/cocktail.api';

const RandomCocktailsPage: React.FC = () => {
  const { data: cocktails, isLoading } = useFetchMultipleRandomCocktailsQuery();

  if (isLoading) return <h1>Loading random cocktails . . .</h1>;

  return (
    <div>
      <h1>10 random cocktails:</h1>
      {cocktails && cocktails.length > 0 ? (
        <div className='cocktail-container'>
          {cocktails.map((cocktail) => (
            <RandomCocktailsCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </div>
      ) : (
        <div>No cocktails found.</div>
      )}
    </div>
  );
};

export default RandomCocktailsPage;
