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
        ></Breed>
        <Breed
          className="breed-two"
          breedImages2={props.breedImages2}
          selectedBreed2={props.selectedBreed2}
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
