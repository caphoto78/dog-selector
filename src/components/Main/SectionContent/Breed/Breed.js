import React from 'react'
import ImageContainer from './ImageContainer/ImageContainer'
import './Breed.scss'
import Pagination from './Pagination/Pagination'
import CardHeader from './CardHeader/CardHeader'

const Breed = (props) => {
  return (
    <div className={"col-lg breed " + props.className}>
      <CardHeader></CardHeader>
      <ImageContainer></ImageContainer>
      <Pagination></Pagination>
    </div>
  )
}

export default Breed
