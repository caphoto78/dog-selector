import React, { useState, useEffect } from 'react'
import InputForm from './InputForm/InputForm'
import SectionContent from './SectionContent/SectionContent'
import axios from '../../axios'

const Main = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed1, setSelectedBreed1] = useState('')
  const [selectedBreed2, setSelectedBreed2] = useState('')

  const handleSelectedBreeds = (payload) => {
    setSelectedBreed1(payload[0])
    setSelectedBreed2(payload[1])
  }
  console.log('selectedBreed1: ' + selectedBreed1, 'selectedBreed2: ' + selectedBreed2)
  useEffect(() => {
    const getBreeds = async () => {
      try {
        let response = await axios.get('breeds/list/all')
        setBreeds(response.data.message)
      }
      catch (error) {
        console.log('Error', error);
      }
    }
    getBreeds()

  }, [])

  return (
    <main>
      <InputForm
        breeds={breeds}
        onSubmitBreed={(payload) => handleSelectedBreeds(payload)}
      ></InputForm>
      <SectionContent></SectionContent>
    </main>
  )
}

export default Main
