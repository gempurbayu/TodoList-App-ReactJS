import React, { Component } from 'react'
import Button from './Button'
import '../styles/FormInput.css'

export default class FormInput extends Component {
  render() {
    return (
        <form style={inputForm}>
            <input
             style={input}
             placeholder='add task'
             type='text' />
            <Button text='Add' variant='primary'/>
        </form>
    )
  }
}

const inputForm = {
    background: '#fff',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    height: '3rem',
    padding: '0 1rem',
    justifyContent: 'space-between',
    margin : '0.5rem 0' 
}

const input = {
    width: '70%',
    border: 'none'
}