import React from 'react'

export const Calculator = ({input,handleChange}) => {
  return (
    <div id='user-input'>
        <div className='input-group'>
          <p>
            <label>Initial Investment</label>
            <input onChange={(e)=>handleChange(e,'initialInvestment')} type='number' value={input.initialInvestment} required/> 
          </p>
          <p>
            <label>Annual Investment</label>
            <input onChange={(e)=>handleChange(e,'annualInvestment')} type='number' value={input.annualInvestment} required/> 
          </p>
          </div>
          <div className='input-group'>
          <p >
              <label>Expected Return</label>
              <input onChange={(e)=>handleChange(e,'expectedReturn')} type='number' value={input.expectedReturn} required/> 
          </p>
          <p>
              <label>Duration</label>
              <input onChange={(e)=>handleChange(e,'duration')} type='number' value={input.duration} required/> 
          </p>
        </div>
    </div>
  )
}
