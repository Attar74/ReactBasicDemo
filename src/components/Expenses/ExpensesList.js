import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = props => {
    let noExpensesContent = <h2 class='expenses-list__fallback'>Found no Expense.</h2>

    const getItems = (props.filterdExpenses.length == 0) ? noExpensesContent
      : props.filterdExpenses.map((expense) => {
      return (<ExpenseItem item={expense} key={expense.id} />);
    })

    return (
        <ul class="expenses-list ">
            { getItems }
        </ul>
    )  
}

export default ExpenseList;