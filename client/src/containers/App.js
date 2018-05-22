import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import FilterSelector from '../components/FilterSelector'
import 'react-bootstrap';
import '../apparelNetworkCart.css'


const App = () => (
  <div>
      <h1 id="apn-title-row">The Apparel Network</h1>
      <div className="container main-container">
    	<ProductsContainer />
    	<hr/>
    	<CartContainer />
      <hr/>
      </div>
  </div>
)

export default App
