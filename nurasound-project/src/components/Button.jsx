import React from 'react'
import PropTypes from 'prop-types'
import { BsArrowRight } from "react-icons/bs";

const Button = ({ props, className}) => {
  return (
    <div>
      <button className={`${className}`}>{props} <BsArrowRight/></button>
    </div>
  )
}
Button.PropsType = {
  props: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default Button
