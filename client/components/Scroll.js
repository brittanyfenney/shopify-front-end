import React, { useState, useEffect } from "react";
import { Photo } from "./Photo";
// import { apiKey } from "../../secrets";

export const Scroll = () => {
  const [photos, setPhotos] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const apiKey = process.env.API_KEY

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

  // function likeUnlike(url) {
  //   console.log('likeUnlike!')
  //   console.log(url)
  //   for (const photo of photos) {
  //     if (photo.url === url) {
  //       if (photo.liked === undefined) {
  //         photo.liked = true
  //       } else {
  //         photo.liked = !photo.liked
  //       }
  //       console.log(photo.liked)
  //       // photo.liked = !photo.liked
  //     }
  //   }
  // }

  useEffect(() => {
    console.log('in useEffect getPhotos')
    console.log(process.env.NODE_ENV)
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
      <div className="image-container">
        {photos && photos.length
          ? photos.map((photo) => {
              return (
                <Photo photo={photo} key={photo.url}/>
                // <div key={photo.url}>
                //   <a href={photo.url}>
                //     <img src={photo.url} width='300' height='auto'/>
                //   </a>
                //   <p>Title: {photo.title}</p>
                //   <p>Date: {photo.date}</p>
                //   <button id={photo.url} onClick={() => likeUnlike(photo.url)}>{photo.liked ? "Unlike" : "Like"}</button>
                // </div>
              );
            })
          : "Looking for photos"}
      </div>
  );
};
