import React, { useState } from 'react'
// import Checkbox from '../../../../UI/Checkbox/Checkbox'
import './SingleImage.scss'


const SingleImage = (props) => {
  // const breedImages1 = props.breedImages1 && props.breedImages1.map(el => el.imgs)
  // const breedImages2 = props.breedImages2 && props.breedImages2.map(el => el.imgs)
  const imgsPerPage = 8
  const indexOfLastImg = props.breedImages1 ? props.currPage1 * imgsPerPage : props.currPage2 * imgsPerPage
  const indexOfFirstImg = indexOfLastImg - imgsPerPage

  const currentPageImgs1 = props.breedImages1 && props.breedImages1.slice(indexOfFirstImg, indexOfLastImg)
  const currentPageImgs2 = props.breedImages2 && props.breedImages2.slice(indexOfFirstImg, indexOfLastImg)

  // const [checkedImgs, setCheckImgs] = useState([])

  const onImgChecked = (checked) => {
    console.log('CHECKED=', checked)
  }

  const img = (breed) => {
    if (breed) {
      return breed.map((img, index) => {
        return (
          <div key={index} className="images col-3">
            <div className="img-wrapper">
              {props.toggleSelect
                ? <input
                  type="checkbox"
                  checked={img.select}
                  onChange={(event) => {
                    let checked = event.target.checked
                    props.onSetImgChecked({ id: img.id, checked: checked })
                  }}
                /> : ''}
              <img src={img.imgs} alt="" />
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
