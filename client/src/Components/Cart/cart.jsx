import './cart.css'
import Button from '../Button/button'


const Cart = ({cartItems, onCheckout}) => {
  return (
    <div className='cart__container'>
      <p>
				Tanlandi jami:{' '}
				{cartItems.length}
			</p>
      <Button title={`${cartItems.length === 0 ? "Jo'natish":"Tanlang"}`} type={'checkout'} onClick={onCheckout}/>
    </div>
  )
}

export default Cart