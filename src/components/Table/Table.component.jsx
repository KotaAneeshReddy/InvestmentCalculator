import React from 'react'

import { calculateInvestmentResults,formatter } from '../../util/investment'

export const Table = ({input}) => {
    // console.log(input);
    // const {initialInvestment,annualInvestment,expectedReturn,duration}=input
    const resultArray = calculateInvestmentResults(input)
    const initialInvestment = resultArray[0].valueEndOfYear-resultArray[0].interest-resultArray[0].annualInvestment;
    console.log(resultArray);
  return (
    <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Intrest(Year)</th>
                <th>Total Intrest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultArray.map((result)=>{
                const totalIntrest = result.valueEndOfYear - result.annualInvestment*result.year-initialInvestment;
                const totalAmountInvested = result.valueEndOfYear - totalIntrest
                return (
                    <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(totalIntrest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}
