
import React, { useState, useEffect } from 'react'
import './TodoList.css'
import { useReducer } from 'react';
import ItemList from '../ItemList/ItemList';
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: action.id, item: action.item, completed: false }];
    case 'TOGGLE_ITEM':
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

const TodoList = () => {
  const [itemToAdd, setItemToAdd] = useState('');
  const [listItems, dispatch] = useReducer(reducer, []);

  const addItem = () => {
    if (itemToAdd) {
      const newItem = { id: itemToAdd + (Math.random()).toString(), item: itemToAdd, completed: false };
      dispatch({ type: 'ADD_ITEM', id: newItem.id, item: newItem.item });
      setItemToAdd('');
    }
  };

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('listOfItems'))
    if (storedList) {
      dispatch({ type: 'INITIALIZE_ITEMS', items: storedList });
    } else {
      dispatch({ type: 'INITIALIZE_ITEMS', items: [] });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('listOfItems', JSON.stringify(listItems))
  }, [listItems])

  const isTaskDone = (id) => {
    dispatch({ type: 'TOGGLE_ITEM', id: id });
  }

  const onDelete = (id) => {
    dispatch({ type: 'DELETE_ITEM', id: id });
  }

  return (
    <div className='container'>
      <div className='info'>
        <h1>TODO's</h1>
        <h3>Local Storage CRUD app</h3>
        <h5>CRUD - Create Read Update Delete</h5>
      </div>
      <div>
        Add todo <input type='text' value={itemToAdd} onChange={(e) => setItemToAdd(e.target.value)} /><input type='button' value='Add' onClick={addItem} />
      </div>
      <div>
        {
          listItems.map((itemlist) => {
            return (
              <div key={itemlist.id}>
                <ItemList isTaskDone={() => isTaskDone(itemlist.id)} itemlist={itemlist} ondelete={() => onDelete(itemlist.id)} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default TodoList;
// const TodoList = () => {
//   const [itemToAdd, setItemToAdd] = useState('');
//   const [listItems, setListItems] = useState([])

//   const addItem = () => {
//     if (itemToAdd) {
//       setListItems(prev => [...prev, { id: itemToAdd + (Math.random()).toString(), item: itemToAdd, completed: false }])
//     }
//   }

//   useEffect(() => {
//     const storedList = JSON.parse(localStorage.getItem('listOfItems'))
//     if (storedList) {
//       setListItems(storedList)
//     } else {
//       setListItems([])
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem('listOfItems', JSON.stringify(listItems))
//   }, [listItems])

//   const isTaskDone = (id) => {
//     setListItems(prev => {
//       let newItems = prev.map(item => {
//         if (item.id === id) {
//           return { ...item, completed: !item.completed };
//         }
//         return item;
//       });
//       return newItems;
//     });
//   }

//   const ondelete = (id) => setListItems(prev => prev.filter(item => item.id !== id));

//   return (
//     <div className='container'>
//       <div className='info'>
//         <h1>TODO's</h1>
//         <h3>Local Storage CRUD app</h3>
//         <h5>CRUD - Create Read Update Delete</h5>
//       </div>
//       <div>
//         Add todo <input type='text' onChange={(e) => setItemToAdd(e.target.value)} /><input type='button' value='Add' onClick={addItem} />
//       </div>
//       <div>
//         {
//           listItems.map((itemlist) => {
//             return (
//               <div key={itemlist.id}>
//                 <ItemList isTaskDone={() => isTaskDone(itemlist.id)} itemlist={itemlist} ondelete={() => ondelete(itemlist.id)} />
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   );
// };

// export default TodoList;

