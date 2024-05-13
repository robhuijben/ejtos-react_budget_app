import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const AllocationForm = (props) => {
  const { dispatch, remaining, currency } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");
  const submitEvent = () => {
    if (cost > remaining) {
      alert("The value cannot exceed remaining funds  {currency}" + remaining);
      setCost("");
      return;
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    };
    if (action === "Reduce") {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }
  };

  return (
    <div>
      <div className="form d-flex mb-3">
        <div className="input-group">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Department
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Marketing" name="marketing">
              {" "}
              Marketing
            </option>
            <option value="Sales" name="sales">
              Sales
            </option>
            <option value="Finance" name="finance">
              Finance
            </option>
            <option value="HR" name="hr">
              HR
            </option>
            <option value="IT" name="it">
              IT
            </option>
            <option value="Admin" name="admin">
              Admin
            </option>
          </select>
        </div>
        <div className="input-group mx-3">
          <label className="input-group-text" htmlFor="inputGroupSelect02">
            Allocation
          </label>
          <select
            className="form-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option defaultValue value="Add" name="Add">
              Add
            </option>
            <option value="Reduce" name="Reduce">
              Reduce
            </option>
          </select>
        </div>
        <div className="input-group">
          <div className="input-group-text">{currency} </div>
          <input
            className="form-control"
            required="required"
            type="number"
            id="cost"
            value={cost}
            style={{ size: 10 }}
            onChange={(event) => setCost(event.target.value)}
          ></input>
          <button className="btn btn-primary" onClick={submitEvent}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default AllocationForm;
