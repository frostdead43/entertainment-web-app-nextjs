import Image from "next/image";
import styles from "../../styles/page.css";
import { fetchPopularMovies,fetchPopularTv } from '../../lib/fetchers'
import Navbar from "../../components/Navbar";
import Content from "../../components/Content";



export default async function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;

    const movies = await fetchPopularMovies(page);
    const tv = await fetchPopularTv(page);
    const popular = [...movies, ...tv];
    const set = popular.sort(() => Math.random()-0.5); 
  
  return(
    <Content set= {set} page={page} />
  )
}
