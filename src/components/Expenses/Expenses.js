import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpenseList from "./ExpensesList.js";


const Expenses = ({ items }) => {

    const [selecteddate, setSelecteddate] = useState("")

    const setSelectedDateFun = (d) => {
      setSelecteddate(d)
    }

    const filterdExpenses = items.filter((expense) => {
      return selecteddate ? expense.date.getFullYear().toString() == selecteddate : true
    })

  return (
    <div>
      <ExpensesFilter onChangeFilter={setSelectedDateFun} />
      <ExpenseList filterdExpenses={filterdExpenses}/>
    </div>
  );
}

export default Expenses;
