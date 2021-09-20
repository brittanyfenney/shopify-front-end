import React, { useState } from "react";

export const Photo = (props) => {
  const photo = props.photo;
  const [liked, setLiked] = useState(false);

  function likeUnlike() {
    setLiked(!liked);
  }

  return (
    <div key={photo.url}>
      <a href={photo.url}>
        <img src={photo.url} width="300" height="auto" />
      </a>
      <p>Title: {photo.title}</p>
      <p>Date: {photo.date}</p>
      <button id={photo.url} onClick={likeUnlike}>
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};
