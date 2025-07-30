"use server"
export async function fetchPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}`
  );

  const data = await res.json();
  console.log(data);
  return data.results;
}
