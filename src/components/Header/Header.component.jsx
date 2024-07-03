import React from 'react'
import Logo from '../../assets/investment-calculator-logo.png'

export const Header = () => {
  return (
    <header id='header'>
        <img src={Logo} alt='logo.png'/>
        <h1>Intrest Calculator</h1>
      </header>
  )
}
