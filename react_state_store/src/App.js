import './App.css';
import { useState } from 'react';
import Product from './Components/Product';

function App() {

  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: ""
    
  })

  const [products, setProducts] = useState([
    {
      name: "allen wrench",
      price: 2.99,
      description: "handy tool"
        },
    {
      name: "cornucopia",
      price: 5.99,
      description: "festive holiday decoration"
      
      
    },
    {
      name: "banana",
      price: 0.99,
      description: "full of potassium"
     
    },
    {
      name: "quark",
      price: 0.01,
      description: "very small"
      
    }
  ])

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setProducts([...products, formData])
  }

  return (
    <div className="App">
      <h1> Hi There! </h1>
      <ul>
        {products.map((item) => {
          return (
            <Product item={item}/>
           
          )
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
        />
        price:
        <input
          type="number"
          name="price"
          onChange={handleChange}
        />
        description:
        <input
          type="text"
          name="description"
          onChange={handleChange}
        />
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;