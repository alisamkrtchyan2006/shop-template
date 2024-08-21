import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    {id:101, name:"Psychology", price:27000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744091960/9780744091960_cover.jpg"},
    {id:102, name:"Psychology2", price:20000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744098556/9780744098556_cover.jpg"},
    {id:103, name:"Economics", price:37000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780756698270/9780756698270_cover.jpg"},
    {id:104, name:"Politics", price:25000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465402141/9781465402141_cover.jpg"},
    {id:105, name:"Business", price:47000, pic:"https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_3260,h_1678/dk-core-nonprod/9781465415851/9781465415851_cover.jpg"},
    {id:106, name:"Science", price:50000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465419651/9781465419651_cover.jpg"},
    {id:107, name:"Sociology", price:65000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465436504/9781465436504_cover.jpg"},
    {id:108, name:"Movie", price:28000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465437990/9781465437990_cover.jpg"},
  ])

  const [basket, setBasket] = useState([])
  const moveToCart = prod => {
    const result = basket.find(x => x.id == prod.id)
    if(result) {
      result.count++
      setBasket([...basket])
    }else {
      setBasket([...basket,{...prod, count:1}])
    }
  }

  const addCount = id => {
    setBasket(basket.map(item => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    }));
  };


  
  
  const reduceCount = id => {
    setBasket(basket.map(item => {
      if(item.id === id) {
        return {...item, count:Math.max(item.count - 1, 1)}
      }else {
        return item;
      }
    }))
  }
  
  const removeItem = id => {
    setBasket(basket.filter(item => item.id !== id))
  }

  return (
    <>
      <h1>online shop</h1>
      <div className = "content">
        <div>
          <h3>Products</h3>
          <div className="list">
            {
              products.map(prod => <div key={prod.id}>
                <img src={prod.pic}/>
                <p>{prod.name}</p>
                <strong>{prod.price}AMD</strong>
                <button onClick={()=>moveToCart(prod)}>move</button>
              </div>)
            }
          </div>
        </div>
        <div>
          <h3>Cart</h3>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>price</th>
                <th>count</th>
                <th>subtotal</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {
                basket.map(item => <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.count}</td>
                  <td>{item.count*item.price}</td>
                  <td>
                    <button className="add" onClick={() => addCount(item.id)}>+</button>
                    <button className="reduce" onClick={() => reduceCount(item.id)}>-</button>
                    <button className="remove" onClick={() => removeItem(item.id)}>x</button>
                  </td>
                </tr>)
              }
            </tbody>
            
          </table>
        </div>
      </div>
    </>
  )
}

export default App
