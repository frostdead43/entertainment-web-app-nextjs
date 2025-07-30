import styles from "../styles/header.css"

export default function Navbar() {
  return(
  <div className="header">
    <img src="/images/icons/app-icon.svg"/>
    <div className="flex">
      <img src="/images/icons/all-icon.svg"/>
      <img src="/images/icons/movie-icon.svg"/>
      <img src="/images/icons/tv-series-icon.svg"/>
      <img src="/images/icons/menu-bookmark-icon.svg"/>
    </div>
     <img src="/images/icons/avatar-icon.svg"/>
  </div>
  );

}