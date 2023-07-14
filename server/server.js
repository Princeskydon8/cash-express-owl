const express = require('express');
const app = express();

// Mock data for demonstration
const incomeData = [
  { id: 1, description: 'Salary', amount: 5000 },
  { id: 2, description: 'Freelance Work', amount: 1500 },
  { id: 3, description: 'Investment Dividends', amount: 300 },
];

const expensesData = [
  { id: 1, description: 'Rent', amount: 1000 },
  { id: 2, description: 'Groceries', amount: 300 },
  { id: 3, description: 'Utilities', amount: 200 },
];

const budgetsData = [
  { id: 1, category: 'Entertainment', amount: 200 },
  { id: 2, category: 'Transportation', amount: 150 },
  { id: 3, category: 'Shopping', amount: 100 },
];

const savingsGoalsData = [
  { id: 1, goal: 'Vacation', targetAmount: 3000 },
  { id: 2, goal: 'Emergency Fund', targetAmount: 5000 },
];

app.get('/api/income', (req, res) => {
  res.json(incomeData);
});

app.get('/api/expenses', (req, res) => {
  res.json(expensesData);
});

app.get('/api/budgets', (req, res) => {
  res.json(budgetsData);
});

app.get('/api/savings-goals', (req, res) => {
  res.json(savingsGoalsData);
});

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
