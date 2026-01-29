import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense, onAddSubscription }) => {
  const [type, setType] = useState('expense');
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    frequency: 'monthly',
    nextRenewal: '',
    lastUsed: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.amount) {
      alert('Please fill in required fields');
      return;
    }

    if (type === 'expense') {
      onAddExpense({
        name: formData.name,
        amount: formData.amount,
        category: formData.category || 'Other',
        date: formData.date,
        notes: formData.notes
      });
    } else {
      onAddSubscription({
        name: formData.name,
        amount: formData.amount,
        category: formData.category || 'Subscription',
        frequency: formData.frequency,
        nextRenewal: formData.nextRenewal,
        lastUsed: formData.lastUsed,
        notes: formData.notes
      });
    }

    setFormData({
      name: '',
      amount: '',
      category: '',
      date: new Date().toISOString().split('T')[0],
      frequency: 'monthly',
      nextRenewal: '',
      lastUsed: '',
      notes: ''
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card shadow-sm border-0">
          <div className="card-body p-4">
            <h2 className="card-title mb-4">Add New {type === 'expense' ? 'Expense' : 'Subscription'}</h2>
            
            <div className="btn-group w-100 mb-4" role="group">
              <button 
                type="button"
                className={`btn ${type === 'expense' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setType('expense')}
              >
                One-time Expense
              </button>
              <button 
                type="button"
                className={`btn ${type === 'subscription' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setType('subscription')}
              >
                Subscription
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Name *</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Netflix, Groceries"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Amount *</label>
                <div className="input-group">
                  <span className="input-group-text">₹</span>
                  <input
                    type="number"
                    className="form-control"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Category</label>
                <select className="form-select" name="category" value={formData.category} onChange={handleChange}>
                  <option value="">Select Category</option>
                  <option value="Food & Dining">Food & Dining</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Bills & Utilities">Bills & Utilities</option>
                  <option value="Health & Fitness">Health & Fitness</option>
                  <option value="Subscription">Subscription</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {type === 'expense' ? (
                <div className="mb-3">
                  <label className="form-label fw-semibold">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
              ) : (
                <>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Billing Frequency</label>
                    <select className="form-select" name="frequency" value={formData.frequency} onChange={handleChange}>
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                      <option value="weekly">Weekly</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Next Renewal Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="nextRenewal"
                      value={formData.nextRenewal}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Last Used (optional)</label>
                    <input
                      type="date"
                      className="form-control"
                      name="lastUsed"
                      value={formData.lastUsed}
                      onChange={handleChange}
                    />
                    <div className="form-text">Track when you last used this subscription to detect money leaks</div>
                  </div>
                </>
              )}

              <div className="mb-4">
                <label className="form-label fw-semibold">Notes</label>
                <textarea
                  className="form-control"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Add any additional notes..."
                  rows="3"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-100" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none' }}>
                Add {type === 'expense' ? 'Expense' : 'Subscription'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
