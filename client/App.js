import React, { useState, useEffect } from "react";
import { apiKey } from "../secrets";

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isFetching, setIsFetching] = useState([]);

  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`;

  async function getPhotos() {
    console.log('in getPhotos')
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPhotos([...photos, ...data]);
    } catch (error) {
      console.log(error);
    }
  }

  function handleScroll() {
    console.log('in handleScroll')
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setIsFetching(true);
    }
  }

  useEffect(() => {
    console.log('in useEffect getPhotos')
    getPhotos();
  }, []);

  useEffect(() => {
    console.log('in useEffect addEvenListener')
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log('in useEffect isFetching')
    if (isFetching) {
      getPhotos()
      setIsFetching(false)
    }
  }, [isFetching])

  return (
    <div>
      <h1>Spacestagram</h1>
      <div className="image-container">
        {photos && photos.length
          ? photos.map((photo) => {
              return (
                <div key={photo.title}>
                  <a href={photo.url}>
                    <img src={photo.url} width='300' height='auto'/>
                  </a>
                  <p>Title: {photo.title}</p>
                  <p>Date: {photo.date}</p>
                  <button>Like</button>
                </div>
              );
            })
          : "Looking for photos"}
      </div>
    </div>
  );
};
