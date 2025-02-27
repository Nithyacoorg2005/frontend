import React, { useState } from "react";
import './Navbar.css'
import logo from '../../images/image.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [hover, setHover] = useState("");

  const handleHover = (item) => setHover(item); 

  const handleLeave = () => setHover("");

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img style={{width:"200px"}} src={logo} alt="/"/>
      </div>
      <ul className="navbar-menu">
        <li
          className="navbar-item"
          onMouseEnter={() => handleHover("home")}
          onMouseLeave={handleLeave}
        >
       
          <Link to style={{color:"#fff"}} href="/main">Home</Link>
        
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleHover("audiobooks")}
          onMouseLeave={handleLeave}
        >
  
          Audiobooks
          {hover === "audiobooks" && (
            <div className="subnavbar">
              <Link to="/new-releases">New Releases</Link>
             
              <Link to="/genres">Genres</Link>
            </div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleHover("movies")}
          onMouseLeave={handleLeave}
        >
    
          Horror Movies
          {hover === "movies" && (
            <div className="subnavbar">
              <Link to="/classics">Classics</Link>
              <Link to="/modern">Modern</Link>
              <Link to="/thrillers">Thrillers</Link>
            </div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleHover("tvshows")}
          onMouseLeave={handleLeave}
        >
        
          TV Shows
          {hover === "tvshows" && (
            <div className="subnavbar">
              <Link to="/series">Series</Link>
              <Link to="/horrorstories">Horror Documentary</Link>
              <Link to="/anthologies">Anthologies</Link>
            </div>
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleHover("Podcasts")}
          onMouseLeave={handleLeave}
        >
        
          Podcasts
        {hover === "Podcasts" && (
            <div className="subnavbar">
        <Link to style={{color:"#fff"}} href="/podcasts"> Podcasts</Link>
        <Link to style={{color:"#fff"}}href="/videopodcasts">Video Podcasts</Link>
        </div>
        )}
        </li>
         
       
       
      </ul>
    </nav>
  );
};

export default Navbar;
