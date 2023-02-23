import React from 'react'

import './interst-calc.styles.css'

export default function IntrestCalc() {

	/**
	 * Note
	 * I did my claculation, that the inrest rate 
	  */
	const calcIntrest = () =>{
		const shoppingTotal = parseInt(document.querySelector(".shpping-total-input").value)
		const numberOfMonths = parseInt(document.querySelector(".number-of-months").value)
		const resultOutputMonthly = document.querySelector(".result-output-monthly")
		const resultOutputTotal = document.querySelector(".result-output-total")

		const intrestRate = 0.2
		const totalAMountWithintrest = shoppingTotal +  (shoppingTotal * intrestRate)
		const monthlyRate = totalAMountWithintrest / numberOfMonths

		resultOutputMonthly.innerHTML = "R" + monthlyRate
		resultOutputTotal.innerHTML = "R" + totalAMountWithintrest
	}
  return (
    <div className="ic-container">

        <div className="ic-calc">

			<div className="ic-title ic-item">
				<h4>Intrest Calculator</h4>
			</div>

			<div className="ic-shopping-total  ic-input-container ic-item">
				<h4>Your Shopping Total</h4>
				<input  className="shpping-total-input ic-input" type="text" />
			</div>
			
			<div className="ic-number-of-months ic-input-container ic-item">
				<h4>Number of months you will like to pay back the amount</h4>
				<input className="number-of-months ic-input" type="text" />

			</div>
			

			<div className="ic-button-container ic-item">
				<button className="ic-button" onClick={calcIntrest}>Calculate</button>

			</div>
			

		</div>

		<div className="ic-result">

			<div className="ic-result-container ic-item">
				<div className="ic-result-text-container">
					<div>
						<h2>Monthly Payments</h2>
						<h3 className="result-output-monthly"></h3>
					</div>

					<div>
						<h2>Total Amount</h2>
						<h3 className="result-output-total"></h3>
					</div>
				</div>
			</div>
			
		</div>
    </div>
  )
}
