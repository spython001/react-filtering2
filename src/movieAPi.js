const AUTH_KEY = import.meta.env.VITE_REACT_APP_AUTH_KEY

const getPopularMovieData = () => {
    const url =  'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+AUTH_KEY 
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));        
}

export default getPopularMovieData;
