import React, { useState, useRef } from 'react'
import './InputForm.scss'
import { capitalize } from '../../../helper'


const InputForm = (props) => {

  const [firstSelect, setFirstSelect] = useState('')
  const [secondSelect, setSecondSelect] = useState('')


  // Listing Breeds and SubBreeds inside the select tag
  let breedGrouping = Object.values(props.breeds);
  let breedListNames = Object.keys(props.breeds);

  let dogList = breedGrouping.map((subBreed) => {
    let breedIndexNumber = breedGrouping.indexOf(subBreed);
    let breedName = breedListNames[breedIndexNumber];
    if (subBreed.length > 0) {
      return (
        <optgroup
          key={breedName}
          value={breedName}
          label={capitalize(breedName)}
        >
          {subBreed.map(subbreedElement => {
            return (
              <option
                key={subbreedElement}
                value={`${breedName}/${subbreedElement}`}
              >
                {capitalize(subbreedElement) + ' ' + capitalize(breedName)}
              </option>
            )
          })}
        </optgroup >
      )
    } else {
      return (
        <option key={breedName} value={breedName}>{capitalize(breedName)}</option>
      )
    }
  });

  //Handling the state with my new selections

  const handleFirstSelect = (e) => {
    setFirstSelect(e.target.value)
  }
  const handleSecondSelect = (e) => {
    setSecondSelect(e.target.value)
  }

  let mySelections = [firstSelect, secondSelect]


  console.log(mySelections)
  console.log('firstSelect State = ' + firstSelect, 'secondSelect State = ' + secondSelect)


  const select1Ref = useRef()
  const select2Ref = useRef()

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmitBreed(mySelections)
    setFirstSelect('')
    setSecondSelect('')
    select1Ref.current.value = "Choose 1st Breed"
    select2Ref.current.value = "Choose 2nd Breed"
    props.onSubmitBreed(mySelections)
  }


  return (
    <section className="section_inputForm">
      <form className="form" onSubmit={submitHandler}>
        <div className="row">

          <div className="col-lg-4 col-md-6 col-md">
            <select
              className="form-control"
              id="formControlSelect1"
              ref={select1Ref}
              defaultValue="Choose 1st Breed"
              onChange={(e) => handleFirstSelect(e)}
            >
              <option value="Choose 1st Breed" disabled hidden>Choose 1st Breed</option>
              {dogList}
            </select>
          </div>

          <div className="col-lg-4 col-md-6 col-md">
            <select
              className="form-control"
              id="formControlSelect2"
              defaultValue="Choose 2nd Breed"
              onChange={(e) => handleSecondSelect(e)}
              ref={select2Ref}
            >
              <option
                value="Choose 2nd Breed" disabled hidden>Choose 2nd Breed</option>
              {dogList}
            </select>
          </div>

          <div className="col-lg-4 col-md-6 col-md">
            <button type="submit">
              search for dogs
              <i className="fas fa-search"></i>
            </button>

          </div>
        </div>
      </form>
    </section>
  )
}

export default InputForm
