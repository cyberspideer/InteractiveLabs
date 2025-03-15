import React from 'react'
import { useState } from 'react'

const MyButton = (props) => {

  return (
    <div>
      <button onClick={props.functionHandler}>
        Count is {props.value}
      </button>
    </div>
  )
}

export default MyButton
