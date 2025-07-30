"use server"
import Image from "next/image";
import styles from "./page.css";

import { fetchPopularMovies } from '../../lib/fetchers'
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";

export default async function Home() {
  const movies = await fetchPopularMovies()

  return (
    <div>
      <SearchBar/>
      <div className="asd">
        {movies.map(movie => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
    </div>
  )
}
