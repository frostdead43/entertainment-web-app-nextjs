import styles from "../styles/searchbar.css"

export default function SearchBar(){
  return(
    <div className="searchbar">
     <img src="/images/icons/search-icon.svg"/>
     <input type="text" name="search" placeholder="Search for movies or TV series"/>
    </div>
  );
}