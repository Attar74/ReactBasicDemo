import { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";


const Expenses = ({ items }) => {

    const [selecteddate, setSelecteddate] = useState("")

    const setSelectedDateFun = (d) => {
      setSelecteddate(d)
    }
    const isItInTheRange = (item) => {      
      return selecteddate.length ? selecteddate===new Date(item.date).toISOString().slice(0, 4) ? true : false : true;
    }
    const getItems = items.map((expense) => {
      return (isItInTheRange(expense) ? <ExpenseItem item={expense} key={expense.id} /> : "");
    });
  return (
    <div>
      <ExpensesFilter onChangeFilter={setSelectedDateFun} />
      {getItems}
    </div>
  );
}

export default Expenses;
