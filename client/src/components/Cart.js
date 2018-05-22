import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Checkout from './Checkout'
import '../apparelNetworkCart.css';

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        image={product.image}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div className="cart-container col-lg-3">
      <h3>Your Cart</h3>
      <div className="col-lg-9">{nodes}</div>
      <div className="cart-total col-lg-9"><strong>Total: &#36;{total}</strong></div>
      <Checkout
            onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}
            name={'The Apparel Network'}
            description={'Fashion First & Foremost'}
            amount={total}
            className="apn-btn checkout-btn"
          />
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
