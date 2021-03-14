import React from "react";
import Item from "./ExpenseItem";

const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems }) => {
  return (
    <div>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          clear expenses
        </button>
      )}
    </div>
  );
};

export default ExpenseList;
