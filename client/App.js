import React, { useState, useEffect } from 'react'
import { apiKey } from '../secrets'

export const App = () => {
  const [photos, setPhotos] = useState([])

  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=1`

  async function getPhotos() {
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      setPhotos(data)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getPhotos()
  }, [])

  return (
    <div>
      <h1>Spacestagram</h1>
      <div className="image-container">
        {photos && photos.length ? photos.map(photo => {
          return (
            <a href={photo.url} key={photo.title}>
            <img src={photo.url} />
            </a>

          )

        })
      : "Looking for photos"}
      </div>
    </div>
  )
}
