import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Filters.scss";

const Filters = () => {
  const [rate, setRate] = useState(3);
  const onClick = (p) => {
    setRate(p + 1);
  };
  return (
    <div className="filters__container">
      <h2>Filter Products</h2>
      <div>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
        <Form.Check
          inline
          label="Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-2`}
        />
        <Form.Check
          inline
          label="Express Delivery"
          name="group1"
          type="checkbox"
          id={`inline-2`}
        />
        <Button variant="light">Clear Filters</Button>
      </div>
    </div>
  );
};

export default Filters;
