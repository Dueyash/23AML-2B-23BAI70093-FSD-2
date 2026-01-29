import React, { useState } from 'react';

const CSVImport = ({ onImport }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState([]);
  const [importing, setImporting] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile);
      previewCSV(selectedFile);
    } else {
      alert('Please select a valid CSV file');
    }
  };

  const previewCSV = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const rows = text.split('\n').filter(row => row.trim());
      const previewData = rows.slice(0, 6).map(row => row.split(','));
      setPreview(previewData);
    };
    reader.readAsText(file);
  };

  const parseCSV = (text) => {
    const rows = text.split('\n').filter(row => row.trim());
    const headers = rows[0].split(',').map(h => h.trim().toLowerCase());
    
    const data = [];
    for (let i = 1; i < rows.length; i++) {
      const values = rows[i].split(',');
      if (values.length === headers.length) {
        const expense = {};
        headers.forEach((header, index) => {
          expense[header] = values[index].trim();
        });
        
        // Map common column names
        const mappedExpense = {
          name: expense.name || expense.description || expense.item || 'Imported Item',
          amount: expense.amount || expense.price || expense.cost || '0',
          category: expense.category || expense.type || 'Other',
          date: expense.date || new Date().toISOString().split('T')[0],
          notes: expense.notes || expense.memo || ''
        };
        
        data.push(mappedExpense);
      }
    }
    return data;
  };

  const handleImport = () => {
    if (!file) {
      alert('Please select a file first');
      return;
    }

    setImporting(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target.result;
        const data = parseCSV(text);
        onImport(data);
        alert(`Successfully imported ${data.length} expenses!`);
        setFile(null);
        setPreview([]);
        setImporting(false);
      } catch (error) {
        alert('Error parsing CSV file. Please check the format.');
        setImporting(false);
      }
    };
    reader.readAsText(file);
  };

  const downloadTemplate = () => {
    const template = 'name,amount,category,date,notes\nNetflix,15.99,Entertainment,2026-01-15,Monthly subscription\nGroceries,87.50,Food & Dining,2026-01-20,Weekly shopping\n';
    const blob = new Blob([template], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'expense_template.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <h2 className="mb-4">Import Expenses from CSV</h2>
        
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-body">
            <h5 className="card-title">How to Import</h5>
            <ol className="mb-3">
              <li>Prepare a CSV file with your expenses</li>
              <li>Required columns: name, amount, category, date</li>
              <li>Optional column: notes</li>
              <li>Upload the file and preview the data</li>
              <li>Click "Import" to add expenses to your tracker</li>
            </ol>
            <button onClick={downloadTemplate} className="btn btn-primary">
              Download CSV Template
            </button>
          </div>
        </div>

        <div className="card shadow-sm border-0 mb-4">
          <div className="card-body">
            <div className="row g-3 align-items-end">
              <div className="col-md-8">
                <label className="form-label fw-semibold">Choose CSV File</label>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                  className="form-control"
                  id="csv-file-input"
                />
                {file && <div className="form-text mt-2">Selected: {file.name}</div>}
              </div>
              <div className="col-md-4">
                {file && (
                  <button 
                    onClick={handleImport} 
                    className="btn btn-success w-100"
                    disabled={importing}
                  >
                    {importing ? 'Importing...' : 'Import Expenses'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {preview.length > 0 && (
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <h5 className="card-title mb-3">Preview (First 5 rows)</h5>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      {preview[0].map((header, index) => (
                        <th key={index}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {preview.slice(1).map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        <div className="card shadow-sm border-0">
          <div className="card-body">
            <h5 className="card-title mb-3">CSV Format Example</h5>
            <pre className="bg-dark text-light p-3 rounded"><code>{`name,amount,category,date,notes
Netflix,15.99,Entertainment,2026-01-15,Monthly subscription
Spotify,9.99,Entertainment,2026-01-15,Music streaming
Groceries,87.50,Food & Dining,2026-01-20,Weekly shopping`}</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSVImport;
