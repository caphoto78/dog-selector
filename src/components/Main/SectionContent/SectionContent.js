import React from 'react'
import Breed from './Breed/Breed'
import './SectionContent.scss'

const SectionContent = () => {
  return (
    <section className="section_content">
      <div className="row">
        <Breed className="breed-one"></Breed>
        <Breed className="breed-two"></Breed>
      </div>
      <div className="row justify-content-center">
        <button>Select Images</button>
        <button className="red">Delete Selection</button>
      </div>
    </section>
  )
}

export default SectionContent
