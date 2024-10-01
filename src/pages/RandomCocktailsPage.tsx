import React from 'react';
import RandomCocktailsCard from '../components/RandomCocktailsCard';
import { useFetchMultipleRandomCocktailsQuery, usePrefetch } from '../store/cocktails/cocktail.api';

const RandomCocktailsPage: React.FC = () => {
  const { data: cocktails, isLoading } = useFetchMultipleRandomCocktailsQuery();;
  const prefetch = usePrefetch('fetchCocktail')

  if (isLoading) return <h1>Loading random cocktails . . .</h1>;

  return (
    <div>
      <h1>10 random cocktails:</h1>
      {cocktails && cocktails.length > 0 ? (
        <div className='cocktail-container'>
          {cocktails.map((cocktail) => (
            <button
              key={cocktail.idDrink}
              onMouseEnter={() => prefetch(Number(cocktail.idDrink), { ifOlderThan: 60 })}
            >
              <RandomCocktailsCard key={cocktail.idDrink} cocktail={cocktail} />
            </button>
          ))}
        </div>
      ) : (
        <div>No cocktails found.</div>
      )}
    </div>
  );
};

export default RandomCocktailsPage;
