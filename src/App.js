import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_Expense = [
  {
    id: "e1",
    title: "Mobile Recharge",
    date: new Date(2022, 8, 4),
    amount: 500,
  },
  {
    id: "e2",
    title: "Car Insurance",
    date: new Date(2022, 7, 2),
    amount: 1000,
  },
  {
    id: "e3",
    title: "School fees",
    date: new Date(2022, 6, 1),
    amount: 2000,
  },
  {
    id: "e4",
    title: "Fast Food",
    date: new Date(2022, 1, 6),
    amount: 400,
  },
  {
    id: "e5",
    title: "Rent",
    date: new Date(2022, 2, 7),
    amount: 900,
  },
  {
    id: "e5",
    title: "House Rent",
    date: new Date(2022, 4, 10),
    amount: 4000,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_Expense);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
