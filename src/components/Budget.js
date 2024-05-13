import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (e) => {
    setNewBudget(e.target.value);
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: € </span>
      <input
        maxLength="10"
        style={{ width: "100px" }}
        type="number"
        step="10"
        className="me-2"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
      <button className="btn btn-primary" onClick={() => setNewBudget(budget)}>
        Set budget
      </button>
    </div>
  );
};
export default Budget;
