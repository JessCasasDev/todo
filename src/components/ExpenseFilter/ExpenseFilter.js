import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const yearHandler = (event) => {
    const year = Number(event.target.value);
    props.onSelectedYearChange(year);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="year">Filter by year</label>
        <select name="filter" value={props.yearSelected} onChange={yearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
