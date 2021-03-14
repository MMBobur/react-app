import React from "react";

const ExpenseItem = ({ expense, handleEdit, handleDelete, clearItems }) => {
  const { id, charge, amount } = expense;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        <button
          style={{ color: "green", border: "1px solid green" }}
          onClick={() => handleEdit(id)}
        >
          edit
        </button>
        <button
          style={{ color: "red", border: "1px solid red" }}
          onClick={() => handleDelete(id)}
        >
          delete
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
