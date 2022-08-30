import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = function (props) {
  const [filterYears, setfilterYears] = useState("2022");

  const changeFilterHanler = (filterYear) => {
    setfilterYears(filterYear);
  };

  const filterExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYears;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYears}
          onChangeFilter={changeFilterHanler}
        />
        <ExpensesChart expenses={filterExpense} />
        <ExpenseList items={filterExpense} />
      </Card>
    </div>
  );
};
export default Expenses;
