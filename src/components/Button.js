import React from 'react'
import '../styles/Button.css'
import propTypes from 'prop-types'

const Button = ({ variant, text}) => {
  return (
    <div>
      <button className={`btn btn-${variant}`}>
        {text}
      </button>
    </div>
  )
}

Button.propTypes = {
    text: propTypes.string.isRequired,
    variant: propTypes.string.isRequired
}

export default Button
