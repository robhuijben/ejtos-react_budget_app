import React, { useContext, useState } from "react";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const [currencyName, setCurrencyName] = useState("£ Pound");

  const changeCurrency = (val, name) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });

    setCurrencyName(name);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className="w-100 d-flex align-items-center justify-content-between">
          Currency ({currencyName})
        </Dropdown.Toggle>
        <Dropdown.Menu className="w-100">
          <Dropdown.Item onClick={() => changeCurrency("£", "£ Pound")}>
            £ Pound
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeCurrency("$", "$ Dollar")}>
            $ Dollar
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeCurrency("€", "€ Euro")}>
            € Euro
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeCurrency("₹", "₹ Ruppee")}>
            ₹ Ruppee
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Currency;
