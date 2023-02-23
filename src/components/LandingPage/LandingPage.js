import React from 'react'
import shirt from './Group2.png'   // The photos were download from https://unsplash.com/ and edited using Figma



import './landing-page.css'

export default function LandingPage() {
	//^ Componet to display Text about Pear Clothing
	const TextContainer = (props) => {
		return (
			<div className="text-container">
				<p>{props.text}</p>
	  		</div>
		)
	}

	//^ Component to display the company info, regarding Pear Clothing
	const CompanyInfoTextContainer = (props) =>{
		return (
			<div className="text-container company-info-container">
				<p>
					<p>Address: {props.address}</p>
					<p>Email: {props.email}</p>
					<p>Tel: {props.tel}</p>
				</p>
	  		</div>
		)
	}

	//^ An array containg all the text to be dispalyed on the landing page.
	const textArray = [
		"Peer Clothing was orginally founded in 2004 in Cape Town",
		"Peer Clothing offers comfortable and styles colthes to both male and females, will also keeping up with the latest fashion trendss",
		"Our clothing aims to be both comfortable as well as practical while still retaining a stylish look.",
	]

	//^ An object of the Company details
	const companyDetails = {
		address: "10 Pear Street Cape Town",
		email: "enquiries@pearclothing.com",
		tel: "071 456 2219"
	}

  return (
    <div className="landing-page">
        <div className="info-box">
            <div className="info-box-left">
                <img className="shirt-img" src={shirt} alt="collection of clothing images" srcset="" />
            </div>

            <div className="info-box-right">

              <div className="title-container">
					<h1>Pear Clothing</h1>
              </div>

			  {/* //^ Component displaying info the textArray */}
			  <TextContainer text={textArray[0]}/> 

			  {/* //^ Component displaying info the textArray */}
			  <TextContainer text={textArray[1]}/> 

			  {/* //^ Component displaying info the textArray */}
			  <TextContainer text={textArray[2]}/> 

			  {/* //^ Component displaying info the companyDetails object */}
			  <CompanyInfoTextContainer address={companyDetails.address} email={companyDetails.email} tel={companyDetails.tel}/>

            </div>
        </div>
    </div>
  )
}
