import React from 'react';
import Product from '../product/Product';
import "./ProductList.css"

const ProductList = () => {
  return (
    <div className="productlist">
      <div className="pl-text">
        <h1 className="pl-title">
          create and inspire a lovely experience.
        </h1>
        <p className="pl-desc">
          I'm here to give you a lovely web experience, astonishing web design and working experience like never before. Here to satisfy your every needs.
        </p>
      </div>
      <div className="pl-list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default ProductList