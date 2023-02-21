import React from 'react';
const Input = ({ users, onInputChange, inputF }) => {
    const handleChange = (event) => {
      const inputValue = event.target.value.toLowerCase();
      const filteredUsers = users.filter(user => {
        const userName = `${user.name.title} ${user.name.first} ${user.name.last}`.toLowerCase();
        return userName.includes(inputValue);
      });
      onInputChange(filteredUsers);
    };
  
    return (
      <div>
        <form>
          <input type='text' placeholder='Search' ref={inputF} onChange={handleChange}></input>
        </form>
      </div>
    )
  }
  
  export default Input;




// import React from 'react'
// const Input = ({ users, onInputChange, inputF }) => {
//     {
//         const currentUsers = users.filter((user) => {
//             const fullUserName = `${user.name.title} ` + `${user.name.first} ` + `${user.name.last}`
//             return (
//                 fullUserName.toLowerCase().includes(e.target.value.toLowerCase())
//             )
//         });
//         onInputChange(currentUsers);
//     };

//     return (
//         <div>
//             <form>
//                 <input type='text' placeholder='Search' onInputChange={onInputChange} users={users} ref={inputF}></input>
//             </form>
//         </div>
//     )
// }



// export default Input