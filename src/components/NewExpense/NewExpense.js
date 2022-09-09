import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const submittedExpenseHandler = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };

    props.onAddExpense(newExpense);
    setDisplayForm(false);
  };

  const onAddNewExpenseHandler = () => {
    setDisplayForm(true);
  };

  const onCancelHandler = () => {
    setDisplayForm(false);
  };

  return (
    <div className="new-expense">
      {!displayForm && (
        <button onClick={onAddNewExpenseHandler}>Add New Expense</button>
      )}
      {displayForm && (
        <ExpenseForm
          onCancel={onCancelHandler}
          onExpenseSubmitted={submittedExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
