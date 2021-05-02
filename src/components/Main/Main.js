import React, { useState, useEffect } from 'react'
import InputForm from './InputForm/InputForm'
import SectionContent from './SectionContent/SectionContent'
import axios from '../../axios'

const Main = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed1, setSelectedBreed1] = useState('')
  const [selectedBreed2, setSelectedBreed2] = useState('')
  const [breedImages1, setBreedImages1] = useState([])
  const [breedImages2, setBreedImages2] = useState([])

  const handleSelectedBreeds = (payload) => {

    setSelectedBreed1(payload[0])
    setSelectedBreed2(payload[1])
  }
  console.log('selectedBreed1---' + selectedBreed1)
  console.log('selectedBreed2---' + selectedBreed2)

  useEffect(() => {
    getBreedsList()
  }, [])

  const getBreedsList = async () => {
    try {
      let response = await axios.get('breeds/list/all')
      setBreeds(response.data.message)
    }
    catch (error) {
      console.log('Error', error);
    }
  }

  const getBreedImages = async (breed) => {
    try {
      let response = await axios.get(`breed/${breed}/images`)
      if (breed && breed === selectedBreed1) {
        setBreedImages1(response.data.message)
      } else if (breed && breed === selectedBreed2) {
        setBreedImages2(response.data.message)
      }
    }
    catch (error) {
      console.log('Error', error);
    }
  }


  useEffect(() => {
    if (selectedBreed1) {
      getBreedImages(selectedBreed1)
    }
    if (selectedBreed2) {
      getBreedImages(selectedBreed2)
    }
  }, [selectedBreed1, selectedBreed2])







  return (
    <main>
      <InputForm
        breeds={breeds}
        onSubmitBreed={(payload) => handleSelectedBreeds(payload)}
      ></InputForm>
      <SectionContent
        breedImages1={breedImages1}
        breedImages2={breedImages2}
        selectedBreed1={selectedBreed1}
        selectedBreed2={selectedBreed2}
      ></SectionContent>
    </main>
  )
}

export default Main
