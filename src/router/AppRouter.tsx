import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CocktailsPage from '../pages/CocktailsPage';
import HomePage from '../pages/HomePage';
import RandomCocktailsPage from '../pages/RandomCocktailsPage';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/cocktails' element={<CocktailsPage />} />
      <Route path='/randomcocktails' element={<RandomCocktailsPage />} />
    </Routes>
  );
};

export default AppRouter;
