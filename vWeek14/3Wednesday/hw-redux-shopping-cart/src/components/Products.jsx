import React, {useEffect} from 'react'
import data from '../assets/data'
import {useDispatch, useSelector} from 'react-redux'
import {loadProducts} from '../actions/productActions'

const Products = () => {
  // console.log(data)
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  useEffect(() => {
    dispatch(loadProducts(data))

  }, [])
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="row">
              {products.map(productObj =>{
                return (
                  <div className= "col-4 mb-5">

                    <a href="#">
                      <img src="" alt="" />
                    </a>
                  </div>
                )
              })}

            </div>
          </div>


          <div className="col-8">CartItems</div>
        </div>
      </div>
    </>
  )
}

export default Products
