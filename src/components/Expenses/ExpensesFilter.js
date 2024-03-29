import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ onChangeFilter }) => {
  const filterHnadler = (event) => {
    onChangeFilter(event.target.value)
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterHnadler}>
          <option value="">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <span></span>
    </div>
  );
};

export default ExpensesFilter;
