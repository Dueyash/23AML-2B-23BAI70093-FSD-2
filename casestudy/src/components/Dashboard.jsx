import React, { useState, useEffect } from 'react';

const Dashboard = ({ expenses, subscriptions, deleteExpense }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    checkForAlerts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscriptions]);

  const checkForAlerts = () => {
    const today = new Date();
    const newAlerts = [];

    subscriptions.forEach(sub => {
      const renewalDate = new Date(sub.nextRenewal);
      const daysUntilRenewal = Math.ceil((renewalDate - today) / (1000 * 60 * 60 * 24));

      if (daysUntilRenewal <= 7 && daysUntilRenewal >= 0) {
        newAlerts.push({
          type: 'renewal',
          message: `${sub.name} renews in ${daysUntilRenewal} days (${sub.nextRenewal})`,
          subscription: sub
        });
      }
    });

    // Detect money leaks
    const monthlySubs = subscriptions.filter(sub => sub.frequency === 'monthly');
    const unusedSubs = monthlySubs.filter(sub => {
      const lastUsed = sub.lastUsed ? new Date(sub.lastUsed) : null;
      if (!lastUsed) return false;
      const daysSinceUsed = Math.ceil((today - lastUsed) / (1000 * 60 * 60 * 24));
      return daysSinceUsed > 30;
    });

    unusedSubs.forEach(sub => {
      newAlerts.push({
        type: 'leak',
        message: `Money leak detected: ${sub.name} - unused for over 30 days`,
        subscription: sub
      });
    });

    setAlerts(newAlerts);
  };

  const getTotalExpenses = () => {
    return expenses.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0).toFixed(2);
  };

  const getMonthlySubscriptionCost = () => {
    return subscriptions.reduce((sum, sub) => {
      const amount = parseFloat(sub.amount || 0);
      if (sub.frequency === 'monthly') return sum + amount;
      if (sub.frequency === 'yearly') return sum + (amount / 12);
      return sum;
    }, 0).toFixed(2);
  };

  const getCurrentMonthExpenses = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    return expenses.filter(exp => {
      const expDate = new Date(exp.date);
      return expDate.getMonth() === currentMonth && expDate.getFullYear() === currentYear;
    }).reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0).toFixed(2);
  };

  const getExpensesByCategory = () => {
    const categories = {};
    expenses.forEach(exp => {
      const category = exp.category || 'Other';
      categories[category] = (categories[category] || 0) + parseFloat(exp.amount || 0);
    });
    return Object.entries(categories).sort((a, b) => b[1] - a[1]);
  };

  const recentExpenses = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

  return (
    <div className="dashboard">
      <div className="row g-3 mb-4">
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted text-uppercase">Total Expenses</h6>
              <h2 className="card-title display-6 fw-bold text-dark mb-0">${getTotalExpenses()}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted text-uppercase">This Month</h6>
              <h2 className="card-title display-6 fw-bold text-dark mb-0">${getCurrentMonthExpenses()}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted text-uppercase">Monthly Subscriptions</h6>
              <h2 className="card-title display-6 fw-bold text-dark mb-0">${getMonthlySubscriptionCost()}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted text-uppercase">Active Subscriptions</h6>
              <h2 className="card-title display-6 fw-bold text-dark mb-0">{subscriptions.length}</h2>
            </div>
          </div>
        </div>
      </div>

      {alerts.length > 0 && (
        <div className="mb-4">
          <h3 className="mb-3">Alerts & Reminders</h3>
          {alerts.map((alert, index) => (
            <div key={index} className={`alert ${alert.type === 'renewal' ? 'alert-warning' : 'alert-danger'} border-start border-4`}>
              <h6 className="alert-heading mb-1">{alert.type === 'renewal' ? 'Renewal Reminder' : 'Money Leak'}</h6>
              <p className="mb-0">{alert.message}</p>
            </div>
          ))}
        </div>
      )}

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title mb-3">Recent Expenses</h4>
              <div className="list-group list-group-flush">
                {recentExpenses.length > 0 ? (
                  recentExpenses.map(exp => (
                    <div key={exp.id} className="list-group-item d-flex justify-content-between align-items-start border-0 px-0">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{exp.name}</div>
                        <span className="badge bg-primary rounded-pill me-2">{exp.category}</span>
                        <small className="text-muted">{exp.date}</small>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fw-bold fs-5">${parseFloat(exp.amount).toFixed(2)}</span>
                        <button onClick={() => deleteExpense(exp.id)} className="btn btn-sm btn-danger">Delete</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-muted fst-italic py-4">No expenses yet. Add your first expense!</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title mb-3">Expenses by Category</h4>
              <div className="list-group list-group-flush">
                {getExpensesByCategory().length > 0 ? (
                  getExpensesByCategory().map(([category, amount]) => (
                    <div key={category} className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                      <span className="text-secondary">{category}</span>
                      <span className="badge bg-dark rounded-pill fs-6">${amount.toFixed(2)}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-muted fst-italic py-4">No categories yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
