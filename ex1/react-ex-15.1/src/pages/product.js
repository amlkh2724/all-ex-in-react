
import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({ id, data }) => {
    return (
        <>
            <h1>{data[id - 1].title}</h1>
            <h3>{data[id - 1].size}</h3>
            <img alt='img' src={data[id - 1].imageUrl} />
            <p><Link to='/products'>back</Link></p>
        </>
    )
}

export default Product