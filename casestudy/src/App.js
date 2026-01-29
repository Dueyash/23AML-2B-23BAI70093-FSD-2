import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import ExpenseForm from './components/ExpenseForm';
import SubscriptionList from './components/SubscriptionList';
import MonthlyInsights from './components/MonthlyInsights';
import CSVImport from './components/CSVImport';
import AISuggestions from './components/AISuggestions';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    const savedSubscriptions = localStorage.getItem('subscriptions');
    if (savedExpenses) setExpenses(JSON.parse(savedExpenses));
    if (savedSubscriptions) setSubscriptions(JSON.parse(savedSubscriptions));
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  }, [subscriptions]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const addSubscription = (subscription) => {
    setSubscriptions([...subscriptions, { ...subscription, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const deleteSubscription = (id) => {
    setSubscriptions(subscriptions.filter(sub => sub.id !== id));
  };

  const importFromCSV = (data) => {
    const newExpenses = data.map(item => ({
      ...item,
      id: Date.now() + Math.random()
    }));
    setExpenses([...expenses, ...newExpenses]);
  };

  return (
    <div className="App">
      <header className="bg-gradient text-white py-4 mb-0" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-2">SubTrack - Subscription & Expense Manager</h1>
          <p className="lead mb-0">Track all your expenses and subscriptions in one place</p>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <button className={`btn btn-link nav-link ${activeTab === 'dashboard' ? 'active fw-bold text-primary' : 'text-secondary'}`}
                  onClick={() => setActiveTab('dashboard')}>
                  Dashboard
                </button>
              </li>
              <li className="nav-item">
                <button className={`btn btn-link nav-link ${activeTab === 'add' ? 'active fw-bold text-primary' : 'text-secondary'}`}
                  onClick={() => setActiveTab('add')}>
                  Add Expense
                </button>
              </li>
              <li className="nav-item">
                <button className={`btn btn-link nav-link ${activeTab === 'subscriptions' ? 'active fw-bold text-primary' : 'text-secondary'}`}
                  onClick={() => setActiveTab('subscriptions')}>
                  Subscriptions
                </button>
              </li>
              <li className="nav-item">
                <button className={`btn btn-link nav-link ${activeTab === 'insights' ? 'active fw-bold text-primary' : 'text-secondary'}`}
                  onClick={() => setActiveTab('insights')}>
                  Insights
                </button>
              </li>
              <li className="nav-item">
                <button className={`btn btn-link nav-link ${activeTab === 'import' ? 'active fw-bold text-primary' : 'text-secondary'}`}
                  onClick={() => setActiveTab('import')}>
                  Import CSV
                </button>
              </li>
              <li className="nav-item">
                <button className={`btn btn-link nav-link ${activeTab === 'ai' ? 'active fw-bold text-primary' : 'text-secondary'}`}
                  onClick={() => setActiveTab('ai')}>
                  AI Suggestions
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container py-4">
        {activeTab === 'dashboard' && (
          <Dashboard 
            expenses={expenses} 
            subscriptions={subscriptions}
            deleteExpense={deleteExpense}
          />
        )}
        {activeTab === 'add' && (
          <ExpenseForm 
            onAddExpense={addExpense}
            onAddSubscription={addSubscription}
          />
        )}
        {activeTab === 'subscriptions' && (
          <SubscriptionList 
            subscriptions={subscriptions}
            onDelete={deleteSubscription}
          />
        )}
        {activeTab === 'insights' && (
          <MonthlyInsights 
            expenses={expenses}
            subscriptions={subscriptions}
          />
        )}
        {activeTab === 'import' && (
          <CSVImport onImport={importFromCSV} />
        )}
        {activeTab === 'ai' && (
          <AISuggestions 
            expenses={expenses}
            subscriptions={subscriptions}
          />
        )}
      </main>
    </div>
  );
}

export default App;
