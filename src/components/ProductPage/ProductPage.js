import React from 'react'

import './product-page.styles.css'

import product_1 from './prodcut_assets/product_1.jpeg'
import product_2 from './prodcut_assets/product_2.jpeg'
import product_3 from './prodcut_assets/product_3.jpeg'

//^ --- Importing the product component ---
import Product from './Product'

export default function ProductPage() {
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
	
		},
		{
			img: product_3,
			title: "Seven Zero Five Hoodie",
			description: "A black Seven Zero Five Hoodie, with white text",
			price: "R699"
	
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
    <div className="product-page">{DisplayProducts()}</div>
  )
}
