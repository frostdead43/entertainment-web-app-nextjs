"use server"
export async function fetchPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
  );

  const data = await res.json();
  // console.log(data);
  return data.results;
}

export async function fetchPopularTv() {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}`
  );

  const tvdata = await res.json();
  // console.log(tvdata);
  return tvdata.results;
}
