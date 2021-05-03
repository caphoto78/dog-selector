import React, { useState, useEffect } from 'react'
import InputForm from './InputForm/InputForm'
import SectionContent from './SectionContent/SectionContent'
import axios from '../../axios'
import { v4 as uuidv4 } from 'uuid'

const Main = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed1, setSelectedBreed1] = useState('')
  const [selectedBreed2, setSelectedBreed2] = useState('')
  const [breedImages1, setBreedImages1] = useState([])
  const [breedImages2, setBreedImages2] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage1, setCurrentPage1] = useState(1)
  const [currentPage2, setCurrentPage2] = useState(1)

  console.log('breedImages1', breedImages1)
  console.log('breedImages2', breedImages2)

  const handleSelectedBreeds = (payload) => {
    setSelectedBreed1(payload[0])
    setSelectedBreed2(payload[1])
  }

  const handleCurrentPage1 = (currentPage) => {
    setCurrentPage1(currentPage)
  }
  const handleCurrentPage2 = (currentPage) => {
    setCurrentPage2(currentPage)
  }

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
      setLoading(true)
      let response = await axios.get(`breed/${breed}/images`)
      if (breed === selectedBreed1) {
        setBreedImages1(response.data.message.map(item => {
          return {
            id: uuidv4(),
            imgs: item,
            select: false
          }
        }))
      } else if (breed === selectedBreed2) {
        setBreedImages2(response.data.message.map(item => {
          return {
            id: uuidv4(),
            imgs: item,
            select: false
          }
        }))
      }
      setLoading(false)
    }
    catch (error) {
      console.log('Error', error);
    }
  }


  useEffect(() => {
    if (!selectedBreed1) {
      setBreedImages1([])
    }
    if (!selectedBreed2) {
      setBreedImages2([])
    }
    if (selectedBreed1) {
      getBreedImages(selectedBreed1)
    }
    if (selectedBreed2) {
      getBreedImages(selectedBreed2)
    }
  }, [selectedBreed1, selectedBreed2])


  const onSetImgChecked = (payload) => {
    if (breedImages1) {
      setBreedImages1(
        breedImages1.map(data => {
          if (payload.id === data.id) {
            data.select = payload.checked;
          }
          return data
        })
      )

    }
    if (breedImages2) {
      setBreedImages2(
        breedImages2.map(data => {
          if (payload.id === data.id) {
            data.select = payload.checked;
          }
          return data
        })
      )
    }
  }
  const handleDelete = () => {
    if (breedImages1) {
      setBreedImages1(
        breedImages1.filter(item => item.select != true)
      )
    }
    if (breedImages2) {
      setBreedImages2(
        breedImages2.filter(item => item.select != true)
      )
    }
  }

  return (
    <main>
      <InputForm
        breeds={breeds}
        onSubmitBreed={(payload) => handleSelectedBreeds(payload)}
      ></InputForm>
      <SectionContent
        currPage1={currentPage1}
        currPage2={currentPage2}
        breedImages1={breedImages1}
        breedImages2={breedImages2}
        selectedBreed1={selectedBreed1}
        selectedBreed2={selectedBreed2}
        loading={loading}
        currentPage1={(payload) => handleCurrentPage1(payload)}
        currentPage2={(payload) => handleCurrentPage2(payload)}
        onSetImgChecked={(payload) => onSetImgChecked(payload)}
        handleDelete={handleDelete}
      ></SectionContent>
    </main>
  )
}

export default Main
