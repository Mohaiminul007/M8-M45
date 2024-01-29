import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products =[
    
  ]
  return (
    <div className="App">


      <ExternalUsers></ExternalUsers>



      {/* <Counter></Counter> */}
    </div>
  );
}
 
function ExternalUsers (){
  const [users, setUsers] = useState([])
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => setUsers(data))
  } , [])
  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email} phone={user.phone}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div style={{border:'2px solid red', margin:'20px'}}>
      <h3>Name:{props.name}</h3>
      <h5>Phone:{props.phone}</h5>
      <h5>Email:{props.email}</h5>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(55);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  

  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  )
}


/*
{name:"Laptop",price:153000},
    {name:"Phone",price:93000},
    {name:"Watch",price:3500},
    {name:"TabLet",price:5000},
*/



    {/* <Product name="laptop" price="47000"></Product>
      <Product name="phone" price="75000"></Product>
      <Product name="Watch" price="3500"></Product> */}


 {/* {
        products.map(product => <Product name={product.name} price={product.price       }></Product>)
      } */}


// function App() {
//   const products =[
//     {name:"Laptop",price:153000},
//     {name:"Phone",price:93000},
//     {name:"Watch",price:3500},
//     {name:"TabLet",price:5000},
//   ]
//   return (
//     <div className="App">

//       {
//         products.map(product => <Product name={product.name} price={product.price       }></Product>)
//       }
      
      
      


//       {/* <Product name="laptop" price="47000"></Product>
//       <Product name="phone" price="75000"></Product>
//       <Product name="Watch" price="3500"></Product> */}
      
//     </div>
//   );
// }



function Product (props){
  return(
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price:{props.price}</p>
    </div>
  )
}

export default App;
