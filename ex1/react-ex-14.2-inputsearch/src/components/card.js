import React from 'react'
import './indexx.css'
const Card = ({ userName, userAvatar }) => {
    return (
        <div className='flexIt'>
            <div className='cards'>
                <h1>{userName}</h1>
                <div style={{ background: `url(${userAvatar}) no-repeat center center/cover`, width: '100%',height:"70%"}}></div>
        </div>
        </div >
    )
}


export default Card