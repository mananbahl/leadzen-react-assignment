import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "./Carousel";
import "./App.css";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="header">
        <h2>LEADZEN REACT ASSIGNMENT</h2>
      </div>
      <div>
        {posts.length > 0 ? (
          <Carousel data={posts}></Carousel>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default App;
