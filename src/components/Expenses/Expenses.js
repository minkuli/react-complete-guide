import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const expensesFilterHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() === parseInt(selectedYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesFilter
          onFilterExpenses={expensesFilterHandler}
          selected={selectedYear}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
