import calculateInvestmentResults from '../../util/investment'
import { formatter } from '../../util/investment'
import './Result.css'
export default function Result({expectedReturn,initialInvestment,duration,annualInvestment}){
    const obj={
        initialInvestment:initialInvestment,
        annualInvestment:annualInvestment,
        expectedReturn:expectedReturn,
        duration:duration,
    }
    const resultData= calculateInvestmentResults(obj)
    const InitialInvestment=resultData[0].valueEndOfYear-resultData[0].interest-resultData[0].annualInvestment
    
    return(
        <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interst/year</th>
                <th>Total Intrest</th>
                <th>Investment Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map((ele)=>{
                const totalIntrest=ele.valueEndOfYear-ele.annualInvestment*ele.year-InitialInvestment
                const totalAmountInvested=ele.valueEndOfYear-totalIntrest
                return <tr key={ele.year}>
                 
                    <td>{ele.year}</td>
                    <td>{formatter.format(ele.valueEndOfYear)}</td>
                    <td>{formatter.format(ele.interest)}</td>
                    <td>{formatter.format(totalIntrest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>

                
            })}
        </tbody>

    </table>

   )
    
}