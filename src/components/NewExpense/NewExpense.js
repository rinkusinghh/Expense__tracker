import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (saveExpenseData) => {
    const expenseData = {
      ...saveExpenseData,
      id: Math.random().toString(), // javascript return string, not a number.
    };
    props.onAddExpense(expenseData);

    // Data filling then input fileds is empty!
    setIsEditing(false);
  };

  const startEditingHanler = () => {
    setIsEditing(true);
  };
  const cancelEditingHanler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHanler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditingHanler}
        />
      )}
    </div>
  );
};
export default NewExpense;
