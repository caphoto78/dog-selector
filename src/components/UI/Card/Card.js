import React from 'react'
import './Card.scss'

const Card = (props) => {
  return (
    <div className={"col-lg breed " + props.className} {...props}>
      {props.children}
    </div>
  )
}

export default Card
