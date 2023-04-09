import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData  }) => {
  const [userInput, setUserInput] = useState({
    enteredTtile: "",
    enteredPrice: "",
    enteredDate: "",
  });

  const [formStatus, setFormStatus] = useState(false)

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTtile: event.target.value,
      };
    });
  };

  const priceChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredPrice: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };
  const resetForm = ()=> {
    setUserInput({
      enteredTtile: "",
      enteredPrice: "",
      enteredDate: "",
    });
  }
  const toggleFormStatus = ()=> {
    setFormStatus((prevStatus) => {
      return !prevStatus
    })
    resetForm()
  }
  const submitHnadler = (e) => {
    e.preventDefault();

    const expenseDataObj = {
      title: userInput.enteredTtile,
      price: userInput.enteredPrice,
      date: new Date(userInput.enteredDate),
    };
    onSaveExpenseData(expenseDataObj);
    toggleFormStatus()
  };

  if(!formStatus) {
    return (<button className="add-btn" onClick={toggleFormStatus}>Add New Expenses</button>)
  }
  return (
    <form onSubmit={submitHnadler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTtile}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> price </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={priceChangeHandler}
            value={userInput.enteredPrice}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button className="add-btn" onClick={toggleFormStatus}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
