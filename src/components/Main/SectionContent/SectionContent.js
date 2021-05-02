import React from 'react'
// import Breed from './Breed/Breed'
import Card from '../../UI/Card/Card'
import CardHeader from '../SectionContent/CardHeader/CardHeader'
import ImageContainer from '../SectionContent/ImageContainer/ImageContainer'
import Pagination from '../SectionContent/Pagination/Pagination'
import './SectionContent.scss'

const SectionContent = (props) => {
  return (
    <section className="section_content">
      <div className="row">
        <Card>
          <CardHeader
            className="breed-one"
            breedImages1={props.breedImages1}
            selectedBreed1={props.selectedBreed1}
          ></CardHeader>
          <ImageContainer
            className="breed-one"
            breedImages1={props.breedImages1}
            loading={props.loading}
            currPage1={props.currPage1}
          ></ImageContainer>
          <Pagination
            className="breed-one"
            breedImages1={props.breedImages1}
            loading={props.loading}
            currentPage1={(payload) => props.currentPage1(payload)}
          ></Pagination>
        </Card>
        <Card>
          <CardHeader
            className="breed-two"
            breedImages2={props.breedImages2}
            selectedBreed2={props.selectedBreed2}
          ></CardHeader>
          <ImageContainer
            className="breed-two"
            breedImages2={props.breedImages2}
            loading={props.loading}
            currPage2={props.currPage2}
          ></ImageContainer>
          <Pagination
            className="breed-two"
            breedImages2={props.breedImages2}
            loading={props.loading}
            currentPage2={(payload) => props.currentPage2(payload)}
          ></Pagination>
        </Card>
      </div>
      <div className="row justify-content-center btn-wrapper">
        <button>Select Images</button>
        <button className="red">Delete Selection</button>
      </div>
    </section>
  )
}

export default SectionContent
