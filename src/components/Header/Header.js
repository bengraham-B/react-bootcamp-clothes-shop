import React from 'react'
import './header.css'
import Logo from './logo6.png'


export default function Header() {

    
	class ToggleLoginIn extends React.Component{
		constructor(props){
			super(props)
			this.state = {isLoggedIn: true}
			this.handleClick = this.handleClick.bind(this)
		}

		handleClick() {
			this.setState(prevState => ({
				isLoggedIn: !prevState.isLoggedIn
			}))

			console.log(this.state.isLoggedIn)

			//^ Notifys the user that they have logged out
			if(this.state.isLoggedIn){
				alert("User has Logged Out")
			}
			else{
				
			}
			
		}

		
		

		

		render(){

			return (
				<div className="login-in-out-container">

					<div className="button-login-logout-container"></div>
					<button onClick={this.handleClick}>
						{this.state.isLoggedIn ? "Logout": "Login" }
						{}
					</button>



				</div>
			)
		}
	}

    




  return (
    <div className="header">
        <div className="left-header">
            <img className="header-img" src={Logo} alt="Pheonix" />
            <h1 className="title">Pear Clothing</h1>
        </div>
        <div className="right-header">
			<ToggleLoginIn/>
            
        </div>
    </div>
  )
}


/*
 * Resources Used:
 * (1) Hyperion Dev, L2T11: Information regarding a React function which will show if a user is logged in or not.
 */