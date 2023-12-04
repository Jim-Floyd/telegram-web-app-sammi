import './App.css'
import { getData } from './Constants/db'
import Card from './Components/Card/card'
import Cart from './Components/Cart/cart'
import { useCallback, useEffect, useState } from 'react'

const courses = getData()

const telegram = window.Telegram.WebApp

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    telegram.ready();
  })

  const onAddItem = item => {
    const existItem = cartItems.find(c => c.id == item.id);
    if(existItem) {
      const newData = cartItems.map(c => c.id == item.id ? {...existItem, quantity: existItem.quantity+1}: c);
      setCartItems(newData)
    } else {
      const newData = [...cartItems, { ... item, quantity:1}];
      setCartItems(newData)
    }
  };

  const onRemoveItem = item => {
    const existItem = cartItems.find(c => c.id == item.id);
    if(existItem.quantity===1) {
      const newData = cartItems.filter(c => c.id!==existItem.id);
      setCartItems(newData);
    } else {
      const newData = cartItems.map(c=>
        c.id === existItem.id?{
          ...existItem, quantity:existItem.quantity-1
        }:c);
        setCartItems(newData)
    }
  };

  const onCheckout = () =>{
    telegram.MainButton.text="Sotib olish"
    telegram.MainButton.show()
  }

  const onSendData = useCallback(() => {
    telegram.sendData(JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(()=>{
    telegram.onEvent('mainButtonClicked', onSenData);
    return () => telegram.offevent('mainButtonClicked', onSendData)
  }, [onSendData])

  return (
    <>
      <h1 className='heading'>Sammi kurslari</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      <div className='cards__container'>
        {courses.map(course =>(
          <Card key={course.id} course={course} onAddItem={onAddItem} onRemoveItem={onRemoveItem} />
        ))}
      </div>
    </>
  )
}

export default App
