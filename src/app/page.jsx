"use server"
import Image from "next/image";
import styles from "../../styles/page.css";


import { fetchPopularMovies,fetchPopularTv } from '../../lib/fetchers'
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";

export default async function Home() {
  const movies = await fetchPopularMovies();
  const tv = await fetchPopularTv();
  const popular = [...movies, ...tv];

  const set = popular.sort(() => Math.random()-0.5); 

  console.log(set);


  return (
    <div>
      <SearchBar/>
      <div className="asd">
        {set.map(set => (
          <div key={set.id}>
            <div className="abs">
            <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${set.poster_path}`} alt={set.name || set.title} />
            <div className="background">
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.05762 0.75H10.6094C10.6466 0.75 10.6782 0.757236 10.7109 0.771484L10.7217 0.775391L10.7314 0.779297C10.7986 0.80616 10.8383 0.840443 10.8701 0.886719C10.9028 0.934312 10.917 0.977751 10.917 1.03613V12.9639C10.917 13.0222 10.9028 13.0657 10.8701 13.1133C10.8383 13.1596 10.7986 13.1938 10.7314 13.2207L10.7236 13.2236L10.7158 13.2275C10.7109 13.2296 10.6807 13.2412 10.6094 13.2412C10.5318 13.2412 10.4733 13.225 10.418 13.1885L10.3633 13.1445L6.35742 9.23438L5.83301 8.72363L5.30957 9.23438L1.30273 13.1455C1.21581 13.2264 1.14401 13.2499 1.05762 13.25C1.02036 13.25 0.987856 13.2428 0.955078 13.2285L0.945312 13.2246L0.93457 13.2207L0.852539 13.1738C0.830239 13.1562 0.811855 13.1365 0.795898 13.1133C0.76325 13.0657 0.750034 13.0222 0.75 12.9639V1.03613C0.750034 0.977751 0.76325 0.934311 0.795898 0.886719C0.827746 0.840293 0.867275 0.806216 0.93457 0.779297L0.945312 0.775391L0.955078 0.771484C0.987856 0.757223 1.02036 0.75 1.05762 0.75Z" stroke="white" strokeWidth="1.5"/>
            </svg>
            </div>
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 128C128 92.7 156.7 64 192 64L448 64C483.3 64 512 92.7 512 128L512 545.1C512 570.7 483.5 585.9 462.2 571.7L320 476.8L177.8 571.7C156.5 585.9 128 570.6 128 545.1L128 128zM192 112C183.2 112 176 119.2 176 128L176 515.2L293.4 437C309.5 426.3 330.5 426.3 346.6 437L464 515.2L464 128C464 119.2 456.8 112 448 112L192 112z"/></svg> */}
            </div>
            <div className="span-flex">
              <span className="deneme">{set.release_date? set.release_date.slice(0, 4): set.first_air_date? set.first_air_date.slice(0, 4): "?"}</span>
              <span>{set.original_language.toUpperCase()}</span>
              <span>{set.vote_average.toFixed(1)}</span>
            </div>
          <p>{set.name || set.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
