import { useState } from 'react'
import './index.css'

import { Table } from './components/Table/Table.component'
import { Header } from './components/Header/Header.component'
import { Calculator } from './components/Calculator/Calculator.component'
function App() {

  const [input,setInput] = useState({
    initialInvestment:10000,
    annualInvestment:1000,
    expectedReturn:15,
    duration:10
  })

  const isInputValid = input.duration>=1;

  function handleChange(e,keyValue){
    setInput((prevInput)=>{
      return {...prevInput,[keyValue]:+e.target.value}
  })
  }

  return (
    <>
      <Header/>
      <Calculator input={input} handleChange={handleChange}/>
      {!isInputValid && <p className='center'>Please enter duration greater than zero</p>}
      {isInputValid && <Table input={input}/>}
    </>
  )
}

export default App
