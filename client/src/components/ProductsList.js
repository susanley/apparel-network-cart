import React from 'react'
import PropTypes from 'prop-types'
import 'react-bootstrap';
import '../apparelNetworkCart.css'

const ProductsList = ({ title, children }) => (
  <div className="product-list col-lg-9">
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
  

)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
