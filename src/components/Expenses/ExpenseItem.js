import { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js"

const ExpenseItem = ({item}) => {

  // react hook
  const [title, setTitle] = useState(item.title);  

  const changeTitle = () => {
    setTitle("updated");
  };
  
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={item.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{item.amount} $</div>
        </div>
        {/* <button onClick={changeTitle}> Change Title</button> */}
      </Card>
    </li>
  );  
}

export default ExpenseItem;
