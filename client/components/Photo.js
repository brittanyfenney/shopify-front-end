import React, { useState } from "react";

export const Photo = (props) => {
  const photo = props.photo;
  const [liked, setLiked] = useState(false);

  function likeUnlike() {
    setLiked(!liked);
  }

  return (
    <div className="image" key={photo.url}>
      <a href={photo.url}>
        <img src={photo.url} width="300" height="auto" />
      </a>
      <div className="photo-info">
        <h2>
          {photo.title} ({photo.date})
        </h2>
        <button id={photo.url} onClick={likeUnlike}>
          {liked ? "Unlike" : "Like"}
        </button>
      </div>
    </div>
  );
};
