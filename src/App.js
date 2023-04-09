import { useState } from 'react';
import Expenses from "./components/Expenses/Expenses.js";
import Card from "./components/UI/Card.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const App = () => {
  const title = "Let's get started";
  const [expenses, setExpenses] = useState(
    [
      {
        id: "e1",
        title: "Toilet Paper",
        amount: 40,
        date: new Date(2020, 7, 14),
      },
      {
        id: "e2",
        title: "New TV",
        amount: 10,
        date: new Date(2021, 2, 12),
      },
      {
        id: "e3",
        title: "Car Insurance",
        amount: 50,
        date: new Date(2021, 2, 28),
      },
      {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 40,
        date: new Date(2021, 5, 12),
      },
    ]
  ); 
  const addNewExpense = (newExpense) => {
    setExpenses (prevExpenses => {
      let newExpenses = [newExpense, ...prevExpenses];
      return newExpenses
    })
  }
  return (
    <div className="App">
      <Card className="expenses">
        <h1>{title}</h1>
        <NewExpense onAddNewExpense = { addNewExpense } />
        <Expenses items={expenses} />
      </Card>
    </div>
  );
}

export default App;