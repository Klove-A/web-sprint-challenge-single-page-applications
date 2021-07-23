import React, { useState, useEffect } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom"
import Home from "./components/Home"
import PizzaForm from "./components/PizzaForm"

const initialFormValues = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: "",
};

const initialFormErrors = {
  name: "",
  size: "",
  topping1: "",
  topping2: "",
  topping3: "",
  topping4: "",
  special: "",
};

const initialPizza = [];
const initialDisabled = true;

const App = () => {

  const [pizza, setPizza] = useState(initialPizza);
  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    // validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      topping: ["topping1", "topping2", "topping3", "topping4"].filter(top => formValues[top]),
      special: formValues.special.trim()
    }
    return (newPizza)
  }
  
  return (
    <div>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </div>,
    <PizzaForm
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
    />
  );
};
export default App;
