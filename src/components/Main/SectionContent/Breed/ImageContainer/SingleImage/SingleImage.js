import React from 'react'
import './SingleImage.scss'

const SingleImage = (props) => {



  const img = (breed) => {

    if (breed) {
      return breed.map(img => {
        return (
          <div key={img} className="images col-3">
            <div className="img-wrapper">
              <input type="checkbox" name="select_img" id="select_img" />
              <img src={img} alt="" />
            </div>
          </div>
        )
      })
    }
  }

  return (
    <>
      {img(props.breedImages1)}
      {img(props.breedImages2)}

    </>
  )
}

export default SingleImage
