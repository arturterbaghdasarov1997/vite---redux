import React, { useState } from 'react';
import { useFetchCocktailsQuery } from '../store/cocktails/cocktail.api';
import CocktailCard from '../components/CocktailsCard';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const CocktailList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [letter, setLetter] = useState('a');

  const { data: cocktails, isLoading } = useFetchCocktailsQuery({ page, per_page: perPage, letter });

  if (isLoading) return <h1>Loading . . .</h1>;

  return (
    <div>
      <h1>Cocktails</h1>
      <select style={{marginTop: "10px", marginBottom: "10px"}} value={perPage} onChange={e => {
        setPerPage(Number(e.target.value));
        setPage(1);
      }}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>

      <div style={{marginTop: "10px", marginBottom: "10px"}}>
        <h2>Filter by Letter:</h2>
        {alphabet.map((char) => (
          <button key={char} onClick={() => setLetter(char)}>
            {char.toUpperCase()}
          </button>
        ))}
        <button onClick={() => setLetter('a')}>Reset</button>
      </div>

      {cocktails && cocktails.length > 0 ? (
        <div className='cocktail-container'>
          {cocktails.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </div>
      ) : (
        <div>No cocktails found.</div>
      )}
    </div>
  );
};

export default CocktailList;