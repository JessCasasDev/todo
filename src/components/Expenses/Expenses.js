import { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState(2022);

  const selectedYearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        yearSelected={selectedYear}
        onSelectedYearChange={selectedYearChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
