import React from 'react'

import './user-profile.styles.css'

import userProfilePic from './assets/max-profile-pic.jpeg'

import Product from '../ProductPage/Product'

//~ Naming convention: up -> user-profile 

export default function UserProfile() {
  return (
		<div className="up-page">

			<div className="up-profile-container">

				<div className="up-profile-pic-container">
					<img className="up-profile-pic" src={userProfilePic} alt="" height="200px"/>
				</div>

				<div className="up-profile-text-container">

					<div className="up-profile-text">

						<div className="up-item-container">
							<p className="heading">Name</p>
							<p className="item">Max Verstappen</p>
						</div>
						
						<div className="up-item-container">
							<p className="heading">User Name</p>
							<p className="item">mrVmax</p>
						</div>
						
						<div className="up-item-container">
							<p className="heading">Email Adress</p>
							<p className="item">maxv@redbullracing.com</p>
						</div>
						
						<div className="up-item-container">
							<p className="heading">Date Joined</p>
							<p className="item">21 February 2023</p>
						</div>
						
						<div className="up-item-container">
							<button className="up-button">Edit Details</button>
						</div>
						
					</div>

				</div>

				
			</div>

			<div className="up-saved-items-container">
				<div className="up-si-title">
					<h1>Saved Items</h1>
				</div>

				<hr className="up-si-hr" />

				<div className="up-si-product-container">
					<h2>You Currently have no items saved</h2>
				</div>
			</div>
		</div>
  	)
}
