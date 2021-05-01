import React from 'react'
import './InputForm.scss'

const InputForm = (props) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  let breedGrouping = Object.values(props.breeds);
  let breedListNames = Object.keys(props.breeds);

  let dogList = breedGrouping.map((subBreed) => {
    let breedIndexNumber = breedGrouping.indexOf(subBreed);
    let breedName = breedListNames[breedIndexNumber];
    if (subBreed.length > 0) {
      return (
        <optgroup key={breedName} label={capitalize(breedName)}>
          {subBreed.map(el => {
            return <option key={el} value={el}>{capitalize(el)}</option>
          })}
        </optgroup >
      )
    } else {
      return (
        <option key={breedName} value={breedName}>{capitalize(breedName)}</option>
      )
    }
  });
  let mySelections = []
  const handleSelect = (e) => {
    mySelections.push(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmitBreed(mySelections)
    mySelections = []
  }


  return (
    <section className="section_inputForm">
      <form className="form" onSubmit={submitHandler}>
        <div className="row">

          <div className="col-lg-4 col-md-6 col-md">
            <select
              className="form-control"
              id="formControlSelect1"
              onChange={(e) => handleSelect(e)}>
              <option value="Choose 1st Breed" disabled selected hidden>Choose 1st Breed</option>
              {dogList}
            </select>
          </div>

          <div className="col-lg-4 col-md-6 col-md">
            <select
              className="form-control"
              id="formControlSelect1"
              onChange={(e) => handleSelect(e)}>
              <option value="Choose 2nd Breed" disabled selected hidden>Choose 2nd Breed</option>
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
