import React from 'react'
import './ItemList.css'
const ItemList = ({ itemlist, isTaskDone, ondelete }) => {
  return (
    <div className='container2'>
      <div className='itemlist' onClick={isTaskDone}>
        {itemlist.completed ? 'V' : 'X'} - {itemlist.item}
      </div>
      <div>
        <input type='button' value='Delete' onClick={ondelete} />
      </div>
    </div>
  )
}

export default ItemList