import { Route, Routes } from 'react-router-dom'

//^ Importing the React Componets. 
import Header from "./components/Header/Header";
import Menu from './components/Menu/Menu';
import LandingPage from './components/LandingPage/LandingPage';
import ProductPage from './components/ProductPage/ProductPage';
import UserProfile from './components/UserProfile/UserProfile'
import LegalPage from './components/LegalPage/LegalPage'
import IntrestCalc from './components/IntrestCalc/IntrestCalc';

//^ Importing Styles
import './app.css'

// //^ Importing Product images
// import product_1 from './components/ProductPage/prodcut_assets/product_1.jpeg'
// import product_2 from './components/ProductPage/prodcut_assets/product_3.jpeg'
// import product_3 from './components/ProductPage/prodcut_assets/product_3.jpeg'



function App() {

	

  return (
    <div className="App">
		<Header/>
		<Menu/>
		<Routes>
			<Route exact path="/" element={<LandingPage/>}/>
			<Route path="/product-page" element={<ProductPage/>}/>
			<Route path="/legal-page" element={<LegalPage/>}/>
			<Route path="/intrest-calc" element={<IntrestCalc/>}/>
			<Route path="/user-profile" element={<UserProfile/>}/>
		</Routes>
			
    </div>
  );
}

export default App;
