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
}

const App = () => {
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
