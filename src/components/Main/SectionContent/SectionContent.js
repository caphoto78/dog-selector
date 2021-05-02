import React from 'react'
import Breed from './Breed/Breed'
import './SectionContent.scss'

const SectionContent = (props) => {
  return (
    <section className="section_content">
      <div className="row">
        <Breed
          className="breed-one"
          breedImages1={props.breedImages1}
          selectedBreed1={props.selectedBreed1}
          loading={props.loading}
          currentPage1={(payload) => props.currentPage1(payload)}
          currPage1={props.currPage1}
        ></Breed>
        <Breed
          className="breed-two"
          breedImages2={props.breedImages2}
          selectedBreed2={props.selectedBreed2}
          loading={props.loading}
          currentPage2={(payload) => props.currentPage2(payload)}
          currPage2={props.currPage2}
        ></Breed>
      </div>
      <div className="row justify-content-center">
        <button>Select Images</button>
        <button className="red">Delete Selection</button>
      </div>
    </section>
  )
}

export default SectionContent
