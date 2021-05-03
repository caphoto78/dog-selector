import React, { useState, useEffect } from 'react'
import './Checkbox.scss'

const Checkbox = (props) => {

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    props.onImgChecked(checked)
  }, [checked])

  const handleChange = () => {
    setChecked((prevState => prevState = !prevState))
  }


  return (
    <>
      <input
        type="checkbox"
        onChange={handleChange}
        {...props}
      />
    </>
  )
}

export default Checkbox
