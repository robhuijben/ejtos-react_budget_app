import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);

  const changeCurrency = (val, name) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div className="alert alert-info">
      <div className="input-group">
        <div className="input-group-text">Currency</div>
        {
          <select
            className="form-control"
            name="Location"
            id="Location"
            onChange={(event) =>
              changeCurrency(event.target.value, event.target.innerText)
            }
          >
            <option value="£">£ Pound</option>
            <option value="$">$ Dollar</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
          </select>
        }
      </div>
    </div>
  );
};

export default Currency;
