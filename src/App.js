import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import Product from './Components/Product';
import './App.css';


class App extends Component {
  render() {

  	var products = [

  		{
  			id : 1,
  			name: 'Iphone 6',
  			price: '10000000'
  		},
  		{
  			id: 2,
  			name: 'Iphone x',
  			price: '20000000'
  		},
  		{
  			id: 3,
  			name: 'Samsung a7',
  			price: '13000000'
  		},
  	];

  	let element = products.map((product, index) => {
  		return (
  			<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" key={index}>
		  		<Product
		  					key = {product.id}
		        			name={product.name}
		        			price = {product.price}

		        		>
        		</Product>;
    		</div>)
  		} );

    return (
      <div>
        <Header></Header>
        <div className="row">
        		{element}
        	</div>
      </div>
      
    );
  }
}

export default App;
