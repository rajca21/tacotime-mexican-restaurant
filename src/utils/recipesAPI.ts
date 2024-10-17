import axios from 'axios';

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

const options = {
  method: 'GET',
  url: 'https://the-mexican-food-db.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'the-mexican-food-db.p.rapidapi.com',
  },
};

export const getRecipes = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRecipeDetails = async (id: string) => {
  try {
    const detailsOptions = {
      method: 'GET',
      url: `https://the-mexican-food-db.p.rapidapi.com/${id}`,
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'the-mexican-food-db.p.rapidapi.com',
      },
    };

    const response = await axios.request(detailsOptions);
    return response.data;
  } catch (error) {}
};
