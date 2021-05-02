import React, { useState, useEffect } from 'react'
import './Pagination.scss'

const Pagination = (props) => {
  const imgsNumber = props.breedImages1 ? props.breedImages1.length : props.breedImages2.length
  const imgsPerPage = 8
  const pages = Math.ceil(imgsNumber / imgsPerPage)

  const [currentBtn, setCurrentBtn] = useState(1)
  const [arrOfCurrentBtns, setArrOfCurrentBtns] = useState([])


  const numberOfPages = []
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i)
  }

  useEffect(() => {

    let tempNumberOfPages = [...arrOfCurrentBtns]

    let dotsInitial = '...'
    let dotsLeft = '... '
    let dotsRight = ' ...'


    if (currentBtn >= 1 && currentBtn <= 3) {
      tempNumberOfPages = [1, 2, 3, dotsInitial]
    }
    else if (currentBtn >= 4 && currentBtn < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(currentBtn - 2, currentBtn)
      const sliced2 = numberOfPages.slice(currentBtn, currentBtn + 1)
      tempNumberOfPages = ([dotsLeft, ...sliced1, ...sliced2, dotsRight])
    }
    else if (currentBtn > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 3)
      tempNumberOfPages = ([dotsLeft, ...sliced])
    }
    else if (currentBtn === dotsInitial) {
      setCurrentBtn(arrOfCurrentBtns[arrOfCurrentBtns.length - 2] + 1)
    }
    else if (currentBtn === dotsLeft) {
      setCurrentBtn(arrOfCurrentBtns[2] - 3)
    }
    else if (currentBtn === dotsRight) {
      setCurrentBtn(arrOfCurrentBtns[2] + 3)
    }
    setArrOfCurrentBtns(tempNumberOfPages)
  }, [currentBtn])



  return (
    <div className="h2 pagination_container">

      <a
        href='#'
        onClick={() => {
          setCurrentBtn(1)
          if (props.breedImages1) {
            props.currentPage1(currentBtn)
          } else {
            props.currentPage2(currentBtn)
          }
        }}
        className={currentBtn <= 3 ? 'disabled' : undefined}
      >
        <i className="fas fa-angle-double-left"></i>
      </a>

      <a
        href='#'
        onClick={() => {
          setCurrentBtn((prev) => prev === 1 ? prev : prev - 1)
          if (props.breedImages1) {
            props.currentPage1(currentBtn)
          } else {
            props.currentPage2(currentBtn)
          }
        }}
        className={currentBtn === 1 ? 'disabled' : undefined}
      >
        <i className="fas fa-angle-left"></i>
      </a>

      {arrOfCurrentBtns.map((page, index) => {
        return (
          <a
            href='#'
            key={index}
            onClick={() => {
              setCurrentBtn(page)
              if (props.breedImages1) {
                props.currentPage1(currentBtn)
              } else {
                props.currentPage2(currentBtn)
              }
            }}
            className={currentBtn === page ? 'active' : undefined}><span>{page}</span></a>
        )
      })}

      <a
        href='#'
        onClick={() => {
          setCurrentBtn((prev) => prev === numberOfPages.length ? prev : prev + 1)
          if (props.breedImages1) {
            props.currentPage1(currentBtn)
          } else {
            props.currentPage2(currentBtn)
          }
        }}
        className={currentBtn === numberOfPages.length ? 'disabled' : undefined}
      >
        <i className="fas fa-angle-right"></i>
      </a>

      <a
        href='#'
        onClick={() => {
          setCurrentBtn(numberOfPages.length)
          if (props.breedImages1) {
            props.currentPage1(currentBtn)
          } else {
            props.currentPage2(currentBtn)
          }
        }}
        className={currentBtn >= numberOfPages.length - 2 ? 'disabled' : undefined}
      >
        <i className="fas fa-angle-double-right"></i>
      </a>
    </div>
  )
}

export default Pagination
