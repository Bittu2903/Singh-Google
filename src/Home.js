import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      {/* <h1>This is HomePage</h1> */}

      <div className="home__header">
        <div className="home__headerLeft">
          {/*Link */}
          <Link to="/about">About</Link>

          {/*Link */}
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          {/*Link */}
          <Link to="/gmail">Gmail</Link>

          {/*Link */}
          <Link to="/images">Images</Link>
          {/*Icon */}
          <AppsIcon />

          {/*Avatar */}
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="logo"
        />

        <div className="home_inputContainer">
          <Search hideButtons />
        </div>
      </div>
    </div>
  );
}

export default Home;
