
import React, { useState, useEffect } from 'react'
import './TodoList.css'
import ItemList from '../ItemList/ItemList';
const TodoList = () => {
  const [itemToAdd, setItemToAdd] = useState('');
  const [listItems, setListItems] = useState([])


  const addItem = () => {
    if (itemToAdd) {
      setListItems(prev => [...prev, { id: itemToAdd + (Math.random()).toString(), item: itemToAdd, completed: false }])
    }
  }

  useEffect(() => {
    setListItems(JSON.parse(localStorage.getItem('listOfItems')))
  }, [])

  useEffect(() => {
    if (listItems.length > 0) {
      localStorage.setItem('listOfItems', JSON.stringify(listItems))
    }
  }, [listItems])



  const isTaskDone = (id) => {
    setListItems(prev => {
      let newItems = prev.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      return newItems;
    });
  }

  const ondelete = (id) => setListItems(prev => prev.filter(item => item.id !== id));



  return (
    <div className='container'>
      <div className='info'>
        <h1>TODO's</h1>
        <h3>Local Storage CRUD app</h3>
        <h5>CRUD - Create Read Update Delete</h5>
      </div>
      <div>
        Add todo <input type='text' onChange={(e) => setItemToAdd(e.target.value)} /><input type='button' value='Add' onClick={addItem} />
      </div>
      <div>
        {
          listItems.map((itemlist) => {
            return (
              <div key={itemlist.id}>
                <ItemList isTaskDone={() => isTaskDone(itemlist.id)} itemlist={itemlist} ondelete={() => ondelete(itemlist.id)} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default TodoList

