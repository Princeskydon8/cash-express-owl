import React, { useEffect, useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [savingsGoals, setSavingsGoals] = useState([]);

  useEffect(() => {
    // Fetch income data
    fetch('/api/income')
      .then(response => response.json())
      .then(data => {
        setIncome(data);
      });

    // Fetch expense data
    fetch('/api/expenses')
      .then(response => response.json())
      .then(data => {
        setExpenses(data);
      });

    // Fetch budget data
    fetch('/api/budgets')
      .then(response => response.json())
      .then(data => {
        setBudgets(data);
      });

    // Fetch savings goals data
    fetch('/api/savings-goals')
      .then(response => response.json())
      .then(data => {
        setSavingsGoals(data);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-heading">Financial Dashboard</h1>

      <div className="section">
        <h2>Income</h2>
        {income.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <ul className="income">
            {income.map((item, i) => (
              <li key={i}>
                <span>{item.description}</span>
                <span>${item.amount}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="section">
        <h2>Expenses</h2>
        {expenses.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <ul className="expenses">
            {expenses.map((item, i) => (
              <li key={i}>
                <span>{item.description}</span>
                <span>${item.amount}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="section">
        <h2>Budgets</h2>
        {budgets.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <ul className="budgets">
            {budgets.map((item, i) => (
              <li key={i}>
                <span>{item.category}</span>
                <span>${item.amount}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="section">
        <h2>Savings Goals</h2>
        {savingsGoals.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <ul className="savings-goals">
            {savingsGoals.map((item, i) => (
              <li key={i}>
                <span>{item.goal}</span>
                <span>${item.targetAmount}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
