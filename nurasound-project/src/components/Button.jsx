import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ props, className}) => {
  return (
    <div>
      <button className={`${className}`}>{props}</button>;
    </div>
  )
}
Button.PropsType = {
  props: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default Button
