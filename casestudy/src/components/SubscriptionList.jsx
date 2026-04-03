import React from 'react';

const SubscriptionList = ({ subscriptions, onDelete }) => {
  const calculateAnnualCost = (amount, frequency) => {
    const numAmount = parseFloat(amount);
    if (frequency === 'monthly') return (numAmount * 12).toFixed(2);
    if (frequency === 'yearly') return numAmount.toFixed(2);
    if (frequency === 'weekly') return (numAmount * 52).toFixed(2);
    return numAmount.toFixed(2);
  };

  const getDaysUntilRenewal = (renewalDate) => {
    if (!renewalDate) return null;
    const today = new Date();
    const renewal = new Date(renewalDate);
    const days = Math.ceil((renewal - today) / (1000 * 60 * 60 * 24));
    return days;
  };

  const sortedSubscriptions = [...subscriptions].sort((a, b) => {
    const daysA = getDaysUntilRenewal(a.nextRenewal) || 999;
    const daysB = getDaysUntilRenewal(b.nextRenewal) || 999;
    return daysA - daysB;
  });

  const getTotalMonthly = () => {
    return subscriptions.reduce((sum, sub) => {
      const amount = parseFloat(sub.amount || 0);
      if (sub.frequency === 'monthly') return sum + amount;
      if (sub.frequency === 'yearly') return sum + (amount / 12);
      if (sub.frequency === 'weekly') return sum + (amount * 4.33);
      return sum;
    }, 0).toFixed(2);
  };

  const getTotalYearly = () => {
    return subscriptions.reduce((sum, sub) => {
      return sum + parseFloat(calculateAnnualCost(sub.amount, sub.frequency));
    }, 0).toFixed(2);
  };

  return (
    <div>
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="card-title mb-0">Active Subscriptions</h2>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end gap-4 mt-3 mt-md-0">
                <div className="text-center">
                  <small className="text-muted d-block">Monthly Total</small>
                  <h4 className="mb-0 text-primary">₹{getTotalMonthly()}</h4>
                </div>
                <div className="text-center">
                  <small className="text-muted d-block">Yearly Total</small>
                  <h4 className="mb-0 text-primary">₹{getTotalYearly()}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {sortedSubscriptions.length > 0 ? (
        <div className="row g-4">
          {sortedSubscriptions.map(sub => {
            const daysUntilRenewal = getDaysUntilRenewal(sub.nextRenewal);
            const isRenewingSoon = daysUntilRenewal !== null && daysUntilRenewal <= 7;

            return (
              <div key={sub.id} className="col-md-6 col-lg-4">
                <div className={`card h-100 shadow-sm ${isRenewingSoon ? 'border-warning border-2' : 'border-0'}`}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h5 className="card-title mb-0">{sub.name}</h5>
                      <button onClick={() => onDelete(sub.id)} className="btn btn-sm btn-danger" style={{ width: '30px', height: '30px', padding: 0 }}>×</button>
                    </div>

                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between py-2 border-bottom">
                        <span className="text-muted">Amount:</span>
                        <span className="fw-semibold">₹{parseFloat(sub.amount).toFixed(2)} / {sub.frequency}</span>
                      </li>

                      <li className="d-flex justify-content-between py-2 border-bottom">
                        <span className="text-muted">Annual Cost:</span>
                        <span className="fw-semibold">₹{calculateAnnualCost(sub.amount, sub.frequency)}</span>
                      </li>

                      {sub.category && (
                        <li className="d-flex justify-content-between py-2 border-bottom">
                          <span className="text-muted">Category:</span>
                          <span className="fw-semibold">{sub.category}</span>
                        </li>
                      )}

                      {sub.nextRenewal && (
                        <li className="d-flex justify-content-between py-2 border-bottom">
                          <span className="text-muted">Next Renewal:</span>
                          <div className="text-end">
                            <div className="fw-semibold">{sub.nextRenewal}</div>
                            {daysUntilRenewal !== null && (
                              <span className={`badge ${isRenewingSoon ? 'bg-warning text-dark' : 'bg-info'} mt-1`}>
                                {daysUntilRenewal === 0 ? 'Today' : 
                                 daysUntilRenewal === 1 ? '1 day' : 
                                 daysUntilRenewal > 0 ? `${daysUntilRenewal} days` : 
                                 'Overdue'}
                              </span>
                            )}
                          </div>
                        </li>
                      )}

                      {sub.lastUsed && (
                        <li className="d-flex justify-content-between py-2 border-bottom">
                          <span className="text-muted">Last Used:</span>
                          <span className="fw-semibold">{sub.lastUsed}</span>
                        </li>
                      )}

                      {sub.notes && (
                        <li className="py-2">
                          <span className="text-muted d-block mb-1">Notes:</span>
                          <small className="text-secondary">{sub.notes}</small>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="card shadow-sm border-0">
          <div className="card-body text-center py-5">
            <p className="text-muted mb-2">No subscriptions tracked yet.</p>
            <p className="text-muted">Start adding subscriptions to track your recurring expenses!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionList;
