import React from 'react'
import SingleImage from './SingleImage/SingleImage'
import './ImageContainer.scss'

const ImageContainer = (props) => {
  return (
    <div className="img_container">
      <div className="row">
        <SingleImage {...props}></SingleImage>
      </div>
    </div>
  )
}

export default ImageContainer
