const FRONTEND_DEV_URLS = [ 'https://apparel-network-cart.herokuapp.com/' ];

const FRONTEND_PROD_URLS = [
  'https://apparel-network-cart.herokuapp.com/',
  'https://apparel-network-cart.herokuapp.com/'
];

module.exports = process.env.NODE_ENV === 'production'
  ? FRONTEND_PROD_URLS
  : FRONTEND_DEV_URLS;