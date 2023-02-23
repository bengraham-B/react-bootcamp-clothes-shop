

//^ Importing the React Componets. 
import Header from "./components/Header/Header";
import LandingPage from './components/LandingPage/LandingPage';
import Menu from './components/Menu/Menu';
import Product from './components/ProductPage/Product';

//^ Importing Styles
import './app.css'

//^ Importing Product images
import product_1 from './components/ProductPage/prodcut_assets/product_1.jpeg'
import product_2 from './components/ProductPage/prodcut_assets/product_3.jpeg'
import product_3 from './components/ProductPage/prodcut_assets/product_3.jpeg'


function App() {

	const products = [
		{
			img: product_1,
			title: "Luck Cat T-Shirt",
			description: "A white Japenese orginal Luck Cat T-shirt, will blue detailing.",
			price: "R599"
	
		},
		{
			img: product_2,
			title: "Seven Zerio Five Shirt",
			description: "A balck zeven zero five shirt, with white text",
			price: "R499"
	
		},
		{
			img: product_3,
			title: "Seven Zero Five Hoodie",
			description: "A black Seven Zero Five Hoodie, with white text",
			price: "R699"
	
		}

	]

	const DisplayProducts = () => {
		const listOfProducts = products.map((product) =>{
			return <Product img={product.img} title={product.title} description={product.description} price={product.price} />
		})

		return (
			<div>
				{listOfProducts}
			</div>
		)
	}


  return (
    <div className="App">
		<Header/>
		<Menu/>
		<LandingPage/>
		<div className="product-section">
			<DisplayProducts/>
		</div>
    </div>
  );
}

export default App;
