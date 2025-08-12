export async function fetchPopularMovies(page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=${page}`
  );

  const data = await res.json();
  // console.log(data);
  return data.results;
}

export async function fetchPopularTv(page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&page=${page}`
  );

  const tvdata = await res.json();
  // console.log(tvdata);
  return tvdata.results;
}
