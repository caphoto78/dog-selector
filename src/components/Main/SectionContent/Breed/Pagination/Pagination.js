import React from 'react'
import './Pagination.scss'

const Pagination = () => {
  return (
    <div className="h2 pagination_container">
      <a href="#"><i className="fas fa-angle-double-left"></i></a>
      <a href="#"><i className="fas fa-angle-left"></i></a>
      <a href="#" className="disabled"><span>1</span></a>
      <a href="#" className="active"><span>2</span></a>
      <a href="#"><span>3</span></a>
      <a href="#"><i className="fas fa-angle-right"></i></a>
      <a href="#"><i className="fas fa-angle-double-right"></i></a>
    </div>
  )
}

export default Pagination
