import React from 'react'
import './SingleImage.scss'

const SingleImage = (props) => {

  const imgsPerPage = 8
  const indexOfLastImg = props.breedImages1 ? props.currPage1 * imgsPerPage : props.currPage2 * imgsPerPage
  const indexOfFirstImg = indexOfLastImg - imgsPerPage

  const currentPageImgs1 = props.breedImages1 && props.breedImages1.slice(indexOfFirstImg, indexOfLastImg)
  const currentPageImgs2 = props.breedImages2 && props.breedImages2.slice(indexOfFirstImg, indexOfLastImg)


  const img = (breed) => {

    if (breed) {
      return breed.map((img, index) => {
        return (
          <div key={index} className="images col-3">
            <div className="img-wrapper">
              <input type="checkbox" name={`select_img${index}`} />
              <img src={img} alt="" />
            </div>
          </div>
        )
      })
    }
  }

  return (
    <>

      {props.loading && props.breedImages1 ? 'loading...' : img(currentPageImgs1)}
      {props.loading && props.breedImages2 ? 'loading...' : img(currentPageImgs2)}

    </>
  )
}

export default SingleImage
