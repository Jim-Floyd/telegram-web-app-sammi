import './card.css'
import Button from '../Button/button';
import { useState } from 'react';

const Card = props => {
    const [count, setcount] = useState(0);
    const {course, onAddItem, onRemoveItem} = props;
    const handleIncrement = () => {
        setcount(prev => prev+1);
        onAddItem(course)
    };
    const handleDecrement = () => {
        setcount(prev => prev-1);
        onRemoveItem(course)
    };
  return (
    <div className='card'>
        <span className={`${count !== 0 ? "card__badge" : "card__badge-hidden"}`}>{count}</span>

        <div className="image__container">
            <img src={course.Image} alt={course.title} width={"100%"} height={"230px"} />
        </div>
        <div className="card__body">
            <h2 className='card__title'>{course.title}</h2>
            <div className="card__price">
                {course.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                })}
            </div>
        </div>
        <div className="hr">

        </div>
        <div className="btn__container">
            <Button title={"+"} onClick={handleIncrement} type={"add"}/>
            {count !==0 && (
                <Button title={"-"} onClick={handleDecrement} type={"remove"}/>
            )}
            
        </div>
    </div>
  )
}

export default Card