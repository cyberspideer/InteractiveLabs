import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton'


function App() {
  let content;
  let flag = false
  if (flag) {
    content = <job />
  }
  else {
    content = <Education />
  }

  return (
    <div>
      <h1>Hello My Name is Zain</h1>
      <MyButton />
      {/* <Information home="Estonia" study="HCI" like="Football" /> */}
      {content}
      <h3>=----------------New apprich---------------</h3>
      {flag && <Education />}
    </div>
  )
}
export default MyButton
