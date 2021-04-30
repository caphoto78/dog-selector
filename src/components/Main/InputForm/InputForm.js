import React from 'react'
import './InputForm.scss'

const InputForm = () => {
  return (
    <section className="section_inputForm">
      <form className="form">
        <div className="row">

          <div className="col-lg-4 col-md-6 col-md">
            <select className="form-control" id="exampleFormControlSelect1" placeholder="Choose Your First Breed">
              <option value="" disabled selected hidden>Choose 1st Breed</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="col-lg-4 col-md-6 col-md">
            <select className="form-control" id="exampleFormControlSelect1" placeholder="Choose Your First Breed">
              <option value="" disabled selected hidden>Choose 2nd Breed</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
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
