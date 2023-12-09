const AUTH_KEY = import.meta.env.VITE_REACT_APP_AUTH_KEY

const getPopularMovieData = async () => {
    const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + AUTH_KEY,
      },
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };
  
  export default getPopularMovieData;