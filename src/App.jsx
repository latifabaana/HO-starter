import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {Routes, Route} from "react-router-dom"

import Form from './pages/Form';
import Items from './pages/Items';
import Hello from './pages/Hello';
import Header from './components/Header';

import './App.css'

function App() {
  return(
    <div className="App">
      <Header/>
      <Routes>
        <Route path = "/hello" element = {<Hello />} />
        <Route path = "/items" element = {<Items />} />
        <Route path = "/form" element = {<Form />} />
      </Routes>
    </div>
  )
 
}

export default App
