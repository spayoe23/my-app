import React, { useState } from 'react';
import './Pricing.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function Pricing() {
const [editMode, setEditMode] = useState(false);

const [tableData, setTableData] = useState({
headers: ['Basic', 'Standard', 'Premium'],
rows: [
['3 hours photography', '5 hours coverage', 'Full day + Drone'],
['50 edited photos', '100 photos + Album', '200 photos + Album + Video'],
['1 location', '2 locations', 'Multiple locations'],
['No assistant', '1 assistant', 'Full team (3 people)'],
['Delivery in 7 days', 'Delivery in 5 days', 'Delivery in 3 days']
],
totals: ['Rs. 10,000', 'Rs. 20,000', 'Rs. 35,000']
});

const handleCellChange = (rowIndex, colIndex, value) => {
const updatedRows = [...tableData.rows];
updatedRows[rowIndex][colIndex] = value;
setTableData({ ...tableData, rows: updatedRows });
};

const handleTotalChange = (colIndex, value) => {
const updatedTotals = [...tableData.totals];
updatedTotals[colIndex] = value;
setTableData({ ...tableData, totals: updatedTotals });
};

return (
    <>
    <Header/>
<div className="pricing-container">
<h2>Pricing Table</h2>
<div className="table-scroll">
<table className="pricing-table">
<thead>
<tr>
<th>Package</th>
{tableData.headers.map((header, i) => (
<th key={i}>{header}</th>
))}
</tr>
</thead>
<tbody>
{tableData.rows.map((row, rowIndex) => (
<tr key={rowIndex}>
<td>Feature {rowIndex + 1}</td>
{row.map((cell, colIndex) => (
<td key={colIndex}>
{editMode ? (
<input
type="text"
value={cell}
onChange={(e) =>
handleCellChange(rowIndex, colIndex, e.target.value)
}
/>
) : (
<span>{cell}</span>
)}
</td>
))}
</tr>
))}
<tr>
<td><strong>Total</strong></td>
{tableData.totals.map((total, index) => (
<td key={index}>
{editMode ? (
<input
type="text"
value={total}
onChange={(e) => handleTotalChange(index, e.target.value)}
/>
) : (
<strong>{total}</strong>
)}
</td>
))}
</tr>
<tr>
<td></td>
{tableData.headers.map((_, index) => (
<td key={index}>
<button className="select-btn">Select</button>
</td>
))}
</tr>
</tbody>
</table>
</div>

  <div className="edit-save-section">
    {editMode ? (
      <button className="save-btn" onClick={() => setEditMode(false)}>
        💾 Save
      </button>
    ) : (
      <button className="edit-btn" onClick={() => setEditMode(true)}>
        ✏️ Edit
      </button>
    )}
  </div>
</div>
<Footer/>
</>
);
}

export default Pricing;