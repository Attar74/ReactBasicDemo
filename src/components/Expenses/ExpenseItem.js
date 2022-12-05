import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js"

const ExpenseItem = ({item}) => {    
  return (
    <Card className="expense-item">
      <ExpenseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">{item.price}</div>
      </div>
    </Card>
  );  
}

export default ExpenseItem;
