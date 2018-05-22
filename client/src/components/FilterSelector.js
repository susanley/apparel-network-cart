import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'
import PropTypes from 'prop-types'
import { addToCart } from '../actions'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'

import products from '../api/products.js'

const KEYS_TO_FILTERS = ['title', 'clothingType']

class FilterSelector extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  render () {
    const filteredProducts = products.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <ProductsList className="products-list" title="">
        {filteredProducts.map(product =>
        <ProductItem
        className="product-item"
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)} id="prod-item"/>
    )}
    </ProductsList>
      </div>
    )
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

FilterSelector.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    clothingType: PropTypes.string.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(mapStateToProps, {addToCart})(FilterSelector)
