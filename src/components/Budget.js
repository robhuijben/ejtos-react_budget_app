import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, currency, expenses } = useContext(AppContext);

  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (e) => {
    const totalExpenses = expenses.reduce((total, item) => {
      return (total = total + item.cost);
    }, 0);

    if (newBudget > 20000) {
      alert("The maximum budget is {currency} 20000");
      return;
    } else if (newBudget < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
      return;
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: newBudget,
      });
      setNewBudget(e.target.value);
    }
  };

  return (
    <div className="alert alert-secondary">
      <div className="input-group">
        <div className="input-group-text">Budget: {currency}</div>
        <input
          min={0}
          max={20000}
          style={{ width: "100px" }}
          type="number"
          step="10"
          className="form-control"
          value={newBudget}
          onChange={handleBudgetChange}
        ></input>
      </div>
    </div>
  );
};
export default Budget;
