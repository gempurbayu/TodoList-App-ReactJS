import React from 'react'
import Button from './Button'
import propTypes from "prop-types"

const TodoItem = ({ todo }) => {
  return (
    <div style={todoItem}>
      <p>{todo.title}</p>
      <div style={{display : 'flex'}}>
        <Button text='edit' variant='success'/>
        <Button text='delete' variant='warning'/>
      </div>
    </div>
  )
}

TodoItem.propTypes = {
    todo: propTypes.object.isRequired
}

export default TodoItem

const todoItem = {
    background: '#2da4f8',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    height: '3rem',
    padding: '0 1rem',
    justifyContent: 'space-between',
    margin : '0.5rem 0' 
}
