import React from 'react'
import './CardHeader.scss'
import { capitalize } from '../../../../helper'

const CardHeader = (props) => {

  // console.log('CardHeader RUNNING')

  const imgNumber = (breed) => {
    if (breed) {
      return <h3>{breed.length} images</h3>
    } else {
      return <h3>0 images</h3>
    }
  }

  const breedName = (breed) => {
    if (breed) {
      return <h2>{capitalize(breed)}</h2>
    } else {
      return <h2>Breed Name</h2>
    }
  }

  return (
    <div className="h2">
      {props.selectedBreed1 ? breedName(props.selectedBreed1) : breedName(props.selectedBreed2)}
      {props.breedImages1 ? imgNumber(props.breedImages1) : imgNumber(props.breedImages2)}
    </div>
  )
}

export default CardHeader
