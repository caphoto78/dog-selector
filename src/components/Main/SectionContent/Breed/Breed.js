import React from 'react'
import ImageContainer from './ImageContainer/ImageContainer'
import './Breed.scss'

const Breed = (props) => {
  return (
    <div className={"col-lg breed " + props.className}>
      <div className="h2">
        <h2>Italian Greyhound</h2>
      </div>

      <ImageContainer></ImageContainer>

      <div className="h2 pagination_container">
        <a href="#"><i className="fas fa-angle-double-left"></i></a>
        <a href="#"><i className="fas fa-angle-left"></i></a>
        <a href="#" className="disabled"><span>1</span></a>
        <a href="#" className="active"><span>2</span></a>
        <a href="#"><span>3</span></a>
        <a href="#"><i className="fas fa-angle-right"></i></a>
        <a href="#"><i className="fas fa-angle-double-right"></i></a>
      </div>
    </div>
  )
}

export default Breed
