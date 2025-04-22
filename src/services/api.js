const API_KEY = "332338facb9516113aec1be80e947029"
const Base_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async ()=>{
  const response = await fetch(`${Base_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json()
  return data.results
};

export const searchMovies = async (query)=>{
  const response = await fetch(`${Base_URL}/search/movie?api_key=${API_KEY}$query=${encodeURIComponent(query)}`);
  const data = await response.json()
  return data.results
};
