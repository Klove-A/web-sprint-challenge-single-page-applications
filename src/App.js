import React, { useState, useEffect } from "react";
import { Route, Link, Switch, Redirect, useHistory } from "react-router-dom";
import { reach } from "yup";
import schema from "./validation/formSchema";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import Confirmation from "./components/Confirmation";

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

  const history = useHistory()

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
    console.log(formValues);
  }

  const formSubmit = () => {
    history.push("/confirmation")
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  
  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/" style={{textDecoration: "none", color: "#4F4F4F"}}>Home</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/pizzaform">
          <PizzaForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/confirmation">
          <Confirmation/>
        </Route>
        <Route path="/home"> 
          <Home/>
        </Route>
        <Redirect to="home"/>
      </Switch>
    </div>
  );
};
export default App;
