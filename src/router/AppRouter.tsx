import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CocktailsPage from '../pages/CocktailsPage';
import HomePage from '../pages/HomePage';
import RandomCocktailsPage from '../pages/RandomCocktailsPage';
import CocktailPage from '../pages/CocktailPage';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/cocktails' element={<CocktailsPage />} />
      <Route path='/cocktails/:idDrink' element={<CocktailPage />} />
      <Route path='/randomcocktails' element={<RandomCocktailsPage />} />
    </Routes>
  );
};

export default AppRouter;
