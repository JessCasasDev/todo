import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenses.length > 0) {
    return props.expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
        id={expense.id}
      />
    ));
  }

  return <h2 className="expenses-list__fallback">Not expenses found</h2>;
};

export default ExpensesList;
