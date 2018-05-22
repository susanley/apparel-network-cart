import React from 'react'
import PropTypes from 'prop-types'
import 'react-bootstrap';
import ModalImage from 'react-modal-image'
import '../apparelNetworkCart.css';


const Product = ({ price, quantity, title, image }) => (
	<div className="product-desc">
  <ModalImage
  small={image}
  large={image}
  alt={title}/>
    <p className="product-title"><strong>{title}</strong></p>
    <p className="product-price">&#36;{price}</p>
    <p className="product-quantity"><span className="cart-quantity">Quantity: </span>{quantity ? `${quantity}` : null}<span className="inventory"> Available</span></p>
    </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  clothingType: PropTypes.string
}

export default Product
