import React from 'react'
import SingleImage from './SingleImage/SingleImage'
import './ImageContainer.scss'

const ImageContainer = () => {
  return (
    <div className="img_container">
      <div className="row">
        <SingleImage></SingleImage>
      </div>
    </div>
  )
}

export default ImageContainer
