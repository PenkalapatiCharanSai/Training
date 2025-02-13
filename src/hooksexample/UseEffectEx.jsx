import React, { useEffect, useState } from 'react';

const UseEffectEx = () => {
  const [count, setCount] = useState(0);
//   console.log(count)
//   useEffect(() => {
//     setTimeout(()=>{
//         setCount(100);
//     },4000)
//     document.title ="MRU";
//   },[count]);

//^api
const [users,setUsers] =useState([]);
console.log(users);
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        setUsers(data);  
    })
    .catch(err => console.log(err));
}, []); 


  return (
    <div className='parent'>
        UseEffectEx
      {/* <h1>{count}</h1> */}
      {/* <button onClick={() => setCount(count - 1)}>Click me</button> */}
      {
        users.map((users,index)=>{
            return(
                // <div>
                //     <h1>{users.name}</h1>
                //     <h3>{users.email}</h3>
                // </div>
                <React.Fragment key={index}>
                <h1>{users.name}</h1>
                <h3>{users.email}</h3>
                </React.Fragment>
            )
        })
      }
    </div>
  );
};

export default UseEffectEx;
