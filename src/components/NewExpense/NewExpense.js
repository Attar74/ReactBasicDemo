import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddNewExpense }) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.round((Math.random() * 10).toString()),
      ...enteredExpenseData,
    };
    onAddNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;