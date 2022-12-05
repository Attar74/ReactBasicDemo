import Expenses from "./components/Expenses/Expenses.js";
import Card from "./components/UI/Card.js";

const App = () => {
  const title = "Let's get started";
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      price: "94.12 $",
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", price: "799.49 $", date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      price: "294.6 $",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      price: "450 $",
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div className="App">
      <Card className="expenses">
        <h1>{title}</h1>
        <Expenses items={expenses} />
      </Card>
    </div>
  );
}

export default App;