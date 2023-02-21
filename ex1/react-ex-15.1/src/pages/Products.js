import React from 'react'
import data from '../Store.js/data'
import { Link } from 'react-router-dom'
import './index.css'

const Products = () => {
  return (
    <div className='gap'>
      {data.map(userTitle => <Link key={userTitle.id} to={`/products/${userTitle.id}`}>{userTitle.title}</Link>)}
    </div>
  )
}
export default Products

