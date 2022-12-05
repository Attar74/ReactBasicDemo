import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";


const Expenses = ({ items }) => {
    const getItems = items.map((item) => {
      return (<ExpenseItem item={item} key={item.id} />);
    });
  return <div>{getItems}</div>;
}

export default Expenses;
