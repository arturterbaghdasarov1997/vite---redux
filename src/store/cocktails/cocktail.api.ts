import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Drink } from '../../interfaces/cocktail.interface';

export const cocktailApi = createApi({
  reducerPath: 'CocktailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/' }),
  tagTypes: ['Cocktail'],
  endpoints: (builder) => ({
    fetchCocktails: builder.query<Drink[], { page: number; per_page: number; letter: string }>({
      query: ({ letter }) => `search.php?f=${letter}`,
      transformResponse: (response: { drinks: Drink[] } | null, meta, arg) => {
        if (!response || !response.drinks) return [];
        
        const { page, per_page } = arg;
        const start = (page - 1) * per_page;
        return response.drinks.slice(start, start + per_page);
      },
    }),
    fetchRandomCocktails: builder.query<Drink[], void>({
      query: () => 'random.php',
      transformResponse: (response: { drinks: Drink[] } | null) => {
        return response?.drinks || [];
      },
    }),
    fetchMultipleRandomCocktails: builder.query<Drink[], void>({
      async queryFn(_, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          const requests = Array.from({ length: 10 }, () => fetchWithBQ('random.php'));

          const responses = await Promise.all(requests);
          const drinks = responses
            .map((response) => {
              if (response.data) {
                return (response.data as { drinks: Drink[] }).drinks[0];
              }
              return null;
            })
            .filter((drink) => drink !== null) as Drink[];

          return { data: drinks };
        } catch (error) {
          return {
            error: {
              status: 'FETCH_ERROR',
              error: (error as Error).message || 'An unknown error occurred',
            },
          };
        }
      },
    }),
    fetchCocktail: builder.query<Drink, number>({
      query: (idDrink: number) => `lookup.php?i=${idDrink}`,
      transformResponse: (response: { drinks: Drink[] }) => response.drinks[0],
    }),    
  }),
});

export const { useFetchCocktailsQuery, useFetchCocktailQuery, useFetchRandomCocktailsQuery, useFetchMultipleRandomCocktailsQuery, usePrefetch } = cocktailApi;
