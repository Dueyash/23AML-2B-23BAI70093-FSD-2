import React, { useState } from 'react';

const MonthlyInsights = ({ expenses, subscriptions }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getMonthlyExpenses = () => {
    return expenses.filter(exp => {
      const expDate = new Date(exp.date);
      return expDate.getMonth() === selectedMonth && expDate.getFullYear() === selectedYear;
    });
  };

  const getMonthlyTotal = () => {
    return getMonthlyExpenses().reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0);
  };

  const getMonthlySubscriptionCost = () => {
    return subscriptions.reduce((sum, sub) => {
      const amount = parseFloat(sub.amount || 0);
      if (sub.frequency === 'monthly') return sum + amount;
      if (sub.frequency === 'yearly') return sum + (amount / 12);
      if (sub.frequency === 'weekly') return sum + (amount * 4.33);
      return sum;
    }, 0);
  };

  const getCategoryBreakdown = () => {
    const monthlyExpenses = getMonthlyExpenses();
    const categories = {};
    
    monthlyExpenses.forEach(exp => {
      const category = exp.category || 'Other';
      categories[category] = (categories[category] || 0) + parseFloat(exp.amount || 0);
    });

    return Object.entries(categories)
      .sort((a, b) => b[1] - a[1])
      .map(([category, amount]) => ({
        category,
        amount,
        percentage: ((amount / getMonthlyTotal()) * 100).toFixed(1)
      }));
  };

  const getSpendingTrend = () => {
    const trends = [];
    for (let i = 2; i >= 0; i--) {
      let month = selectedMonth - i;
      let year = selectedYear;
      
      if (month < 0) {
        month += 12;
        year -= 1;
      }

      const monthExpenses = expenses.filter(exp => {
        const expDate = new Date(exp.date);
        return expDate.getMonth() === month && expDate.getFullYear() === year;
      });

      const total = monthExpenses.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0);
      trends.push({
        month: months[month],
        year,
        total: total.toFixed(2)
      });
    }
    return trends;
  };

  const getTopExpenses = () => {
    return getMonthlyExpenses()
      .sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount))
      .slice(0, 5);
  };

  const getAverageDaily = () => {
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    return (getMonthlyTotal() / daysInMonth).toFixed(2);
  };

  const compareWithLastMonth = () => {
    let lastMonth = selectedMonth - 1;
    let lastYear = selectedYear;
    if (lastMonth < 0) {
      lastMonth = 11;
      lastYear -= 1;
    }

    const lastMonthExpenses = expenses.filter(exp => {
      const expDate = new Date(exp.date);
      return expDate.getMonth() === lastMonth && expDate.getFullYear() === lastYear;
    });

    const lastMonthTotal = lastMonthExpenses.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0);
    const currentTotal = getMonthlyTotal();
    const difference = currentTotal - lastMonthTotal;
    const percentChange = lastMonthTotal > 0 ? ((difference / lastMonthTotal) * 100).toFixed(1) : 0;

    return {
      difference: difference.toFixed(2),
      percentChange,
      increased: difference > 0
    };
  };

  const monthlyExpenses = getMonthlyExpenses();
  const comparison = compareWithLastMonth();

  return (
    <div>
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="card-title mb-0">Monthly Insights & Analytics</h2>
            </div>
            <div className="col-md-6">
              <div className="d-flex gap-2 justify-content-md-end mt-3 mt-md-0">
                <select 
                  className="form-select w-auto"
                  value={selectedMonth} 
                  onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                >
                  {months.map((month, index) => (
                    <option key={index} value={index}>{month}</option>
                  ))}
                </select>
                <select 
                  className="form-select w-auto"
                  value={selectedYear} 
                  onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                >
                  {[2024, 2025, 2026].map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center">
              <h6 className="card-subtitle mb-2 text-muted text-uppercase">Total Spending</h6>
              <h2 className="display-5 fw-bold text-primary mb-2">${getMonthlyTotal().toFixed(2)}</h2>
              <p className="mb-0 small">
                <span className={comparison.increased ? 'text-danger' : 'text-success'}>
                  {comparison.increased ? '↑' : '↓'} {comparison.increased ? '+' : ''}{comparison.percentChange}%
                </span> vs last month
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center">
              <h6 className="card-subtitle mb-2 text-muted text-uppercase">Subscription Costs</h6>
              <h2 className="display-5 fw-bold text-primary mb-2">${getMonthlySubscriptionCost().toFixed(2)}</h2>
              <p className="mb-0 small text-muted">{subscriptions.length} active subscriptions</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center">
              <h6 className="card-subtitle mb-2 text-muted text-uppercase">Average Daily</h6>
              <h2 className="display-5 fw-bold text-primary mb-2">${getAverageDaily()}</h2>
              <p className="mb-0 small text-muted">Based on {monthlyExpenses.length} transactions</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center">
              <h6 className="card-subtitle mb-2 text-muted text-uppercase">Transaction Count</h6>
              <h2 className="display-5 fw-bold text-primary mb-2">{monthlyExpenses.length}</h2>
              <p className="mb-0 small text-muted">Expenses this month</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">Category Breakdown</h5>
              {getCategoryBreakdown().length > 0 ? (
                <div>
                  {getCategoryBreakdown().map(item => (
                    <div key={item.category} className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-secondary">{item.category}</span>
                        <span className="fw-semibold">${item.amount.toFixed(2)} ({item.percentage}%)</span>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <div 
                          className="progress-bar" 
                          style={{ width: `${item.percentage}%`, background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted fst-italic py-4">No expenses for this month</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">Spending Trend (Last 3 Months)</h5>
              <div className="list-group list-group-flush">
                {getSpendingTrend().map((trend, index) => (
                  <div key={index} className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                    <span className="text-secondary">{trend.month} {trend.year}</span>
                    <span className="badge bg-primary rounded-pill fs-6">${trend.total}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">Top 5 Expenses</h5>
              {getTopExpenses().length > 0 ? (
                <div className="list-group list-group-flush">
                  {getTopExpenses().map(exp => (
                    <div key={exp.id} className="list-group-item d-flex justify-content-between align-items-start border-0 px-0">
                      <div>
                        <div className="fw-bold">{exp.name}</div>
                        <small className="text-muted">{exp.date}</small>
                      </div>
                      <span className="badge bg-primary rounded-pill">${parseFloat(exp.amount).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted fst-italic py-4">No expenses for this month</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyInsights;
