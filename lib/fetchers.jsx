

export async function fetchPopularMovies(page = 1) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=${page}`
    );

    if (!res.ok) {
      throw new Error(`TMDB isteği başarısız oldu: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    // console.log("TMDB’den gelen data:", data);
    return data.results;
  } catch (error) {
    console.error("Film verileri çekilirken hata oluştu:", error.message);
    return []; // hata durumunda boş array döner
  }
}


export async function fetchPopularTv(page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&page=${page}`
  );

  const tvdata = await res.json();
  // console.log(tvdata);
  return tvdata.results;
}
