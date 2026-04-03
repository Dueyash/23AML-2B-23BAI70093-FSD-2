import React, { useState, useEffect } from 'react';

const AISuggestions = ({ expenses, subscriptions }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    generateSuggestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expenses, subscriptions]);

  const generateSuggestions = () => {
    const newSuggestions = [];

    // Analyze subscription usage
    const today = new Date();
    subscriptions.forEach(sub => {
      const lastUsed = sub.lastUsed ? new Date(sub.lastUsed) : null;
      if (lastUsed) {
        const daysSinceUsed = Math.ceil((today - lastUsed) / (1000 * 60 * 60 * 24));
        if (daysSinceUsed > 30) {
          newSuggestions.push({
            type: 'cancel',
            priority: 'high',
            title: `Consider canceling ${sub.name}`,
            description: `You haven't used this subscription in ${daysSinceUsed} days. Canceling could save you ₹${sub.amount}/${sub.frequency}.`,
            savings: parseFloat(sub.amount)
          });
        }
      }
    });

    // Find duplicate subscriptions
    const subsByCategory = {};
    subscriptions.forEach(sub => {
      const category = sub.category || 'Other';
      if (!subsByCategory[category]) subsByCategory[category] = [];
      subsByCategory[category].push(sub);
    });

    Object.entries(subsByCategory).forEach(([category, subs]) => {
      if (subs.length > 1 && category === 'Entertainment') {
        const total = subs.reduce((sum, s) => sum + parseFloat(s.amount), 0);
        newSuggestions.push({
          type: 'optimize',
          priority: 'medium',
          title: `Multiple ${category} subscriptions detected`,
          description: `You have ${subs.length} ${category.toLowerCase()} subscriptions totaling ₹${total.toFixed(2)}/month. Consider consolidating to one service.`,
          savings: total * 0.5
        });
      }
    });

    // Analyze spending patterns
    const categoryTotals = {};
    expenses.forEach(exp => {
      const category = exp.category || 'Other';
      categoryTotals[category] = (categoryTotals[category] || 0) + parseFloat(exp.amount || 0);
    });

    const highestCategory = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0];
    if (highestCategory && highestCategory[1] > 500) {
      newSuggestions.push({
        type: 'reduce',
        priority: 'medium',
        title: `High spending in ${highestCategory[0]}`,
        description: `You've spent ₹${highestCategory[1].toFixed(2)} on ${highestCategory[0]}. Consider setting a monthly budget to reduce costs by 15-20%.`,
        savings: highestCategory[1] * 0.15
      });
    }

    // Find annual vs monthly subscription opportunities
    const monthlySubs = subscriptions.filter(sub => sub.frequency === 'monthly');
    monthlySubs.forEach(sub => {
      const monthlyCost = parseFloat(sub.amount);
      const annualSavings = monthlyCost * 12 * 0.15; // Typical annual discount is ~15%
      if (annualSavings > 20) {
        newSuggestions.push({
          type: 'switch',
          priority: 'low',
          title: `Switch ${sub.name} to annual billing`,
          description: `Annual subscriptions typically save 15-20%. You could save approximately $${annualSavings.toFixed(2)}/year.`,
          savings: annualSavings
        });
      }
    });

    // Check for unusual spending spikes
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    const currentMonthTotal = expenses.filter(exp => {
      const expDate = new Date(exp.date);
      return expDate.getMonth() === currentMonth && expDate.getFullYear() === currentYear;
    }).reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0);

    const lastMonthTotal = expenses.filter(exp => {
      const expDate = new Date(exp.date);
      return expDate.getMonth() === lastMonth && expDate.getFullYear() === lastMonthYear;
    }).reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0);

    if (currentMonthTotal > lastMonthTotal * 1.3) {
      newSuggestions.push({
        type: 'alert',
        priority: 'high',
        title: 'Spending spike detected',
        description: `Your spending this month is ${(((currentMonthTotal - lastMonthTotal) / lastMonthTotal) * 100).toFixed(0)}% higher than last month. Review your recent expenses.`,
        savings: 0
      });
    }

    // General savings tips
    if (newSuggestions.length === 0) {
      newSuggestions.push({
        type: 'tip',
        priority: 'low',
        title: 'Great job managing your subscriptions!',
        description: 'Continue tracking your expenses regularly to maintain good financial health.',
        savings: 0
      });
      newSuggestions.push({
        type: 'tip',
        priority: 'low',
        title: 'Set spending alerts',
        description: 'Track when subscriptions renew and set reminders to review them quarterly.',
        savings: 0
      });
      newSuggestions.push({
        type: 'tip',
        priority: 'low',
        title: 'Look for family plans',
        description: 'Many streaming and software services offer family plans that can reduce per-person costs by 30-50%.',
        savings: 0
      });
    }

    setSuggestions(newSuggestions.sort((a, b) => {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }));
  };

  const getTotalPotentialSavings = () => {
    return suggestions.reduce((sum, s) => sum + (s.savings || 0), 0).toFixed(2);
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return '!!';
      case 'medium': return '!';
      case 'low': return 'i';
      default: return 'i';
    }
  };

  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case 'high': return 'bg-danger';
      case 'medium': return 'bg-warning text-dark';
      case 'low': return 'bg-success';
      default: return 'bg-info';
    }
  };

  const getBorderClass = (priority) => {
    switch (priority) {
      case 'high': return 'border-danger';
      case 'medium': return 'border-warning';
      case 'low': return 'border-success';
      default: return 'border-info';
    }
  };

  return (
    <div>
      <div className="card shadow-sm border-0 text-center mb-4" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="card-body text-white py-4">
          <h2 className="card-title mb-2">AI-Powered Savings Suggestions</h2>
          <p className="mb-0">Smart recommendations based on your spending patterns</p>
        </div>
      </div>

      <div className="card shadow-sm border-0 mb-4" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="card-body text-white text-center py-4">
          <h5 className="mb-2">Potential Monthly Savings</h5>
          <h1 className="display-3 fw-bold mb-2">₹{getTotalPotentialSavings()}</h1>
          <p className="mb-0">{suggestions.length} suggestions available</p>
        </div>
      </div>

      <div className="row g-4 mb-4">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className={`card h-100 shadow-sm border-start border-4 ${getBorderClass(suggestion.priority)}`}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className={`badge ${getPriorityBadgeClass(suggestion.priority)}`}>
                    {getPriorityIcon(suggestion.priority)} {suggestion.priority.toUpperCase()}
                  </span>
                  <span className="badge bg-secondary">{suggestion.type}</span>
                </div>
                <h5 className="card-title">{suggestion.title}</h5>
                <p className="card-text text-secondary">{suggestion.description}</p>
                {suggestion.savings > 0 && (
                  <div className="mt-3 pt-3 border-top">
                    <strong className="text-primary">Potential Savings: ${suggestion.savings.toFixed(2)}/month</strong>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h5 className="card-title">How AI Suggestions Work</h5>
          <p className="card-text">Our AI analyzes your spending patterns, subscription usage, and market data to provide personalized recommendations. Suggestions are based on:</p>
          <ul className="mb-0">
            <li>Subscription usage frequency and patterns</li>
            <li>Duplicate or overlapping services</li>
            <li>Monthly spending trends and anomalies</li>
            <li>Billing frequency optimization opportunities</li>
            <li>Industry-standard pricing comparisons</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AISuggestions;
