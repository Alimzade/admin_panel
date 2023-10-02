import "./navbar.scss"
import { useState, useEffect } from "react";

const Navbar = () => {
  const [fullscreenMode, setFullscreenMode] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreenElement = document.fullscreenElement;
      if (fullscreenElement) {
        setFullscreenMode(true);
      } else {
        setFullscreenMode(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleExpandClick = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/"><img src="logo.png" alt=""></img></a>
        <span></span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src={fullscreenMode ? "/collapse.svg" : "/expand.svg"} 
          alt="" 
          className="expand" 
          onClick={handleExpandClick}/>
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Isolated-HD.png" 
          alt="" />
          <span>Admin</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar;