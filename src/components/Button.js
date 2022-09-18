import React from 'react'
import '../styles/Button.css'
import propTypes from 'prop-types'

const Button = ({ variant, text, action}) => {
  return (
    <div>
      <button className={`btn btn-${variant}`} onClick={action}>
        {text}
      </button>
    </div>
  )
}

Button.propTypes = {
    text: propTypes.string.isRequired,
    variant: propTypes.string.isRequired,
    action: propTypes.func
}

export default Button
