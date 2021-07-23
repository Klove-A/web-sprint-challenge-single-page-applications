import React from "react"

export default function PizzaForm(props) {
    
    const {values, submit, change, disabled, errors} = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    };

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };

    return (
        <form id= "pizza-form" onSubmit={onSubmit}>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
            </div>

            <label id="name-input">Name
                <input
                    name="name"
                    type="text"
                    onChange={onChange}
                    value={values.name}
                />
            </label>

            <label id="size-dropdown">Size
                <select
                    name="size"
                    onChange={onChange}
                    value={values.size}
                >
                    <option value="">- Select a size -</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </label>

            <label>Pepperoni
                <input
                    name="topping1"
                    type="checkbox"
                    onChange={onChange}
                    value={values.topping1}
                />
            </label>
            <label>Ham
                <input
                    name="topping2"
                    type="checkbox"
                    onChange={onChange}
                    value={values.topping2}
                />
            </label>
            <label>Mushrooms
                <input
                    name="topping3"
                    type="checkbox"
                    onChange={onChange}
                    value={values.topping3}
                />
            </label>
            <label>Pineapple
                <input
                    name="topping4"
                    type="checkbox"
                    onChange={onChange}
                    value={values.topping4}
                />
            </label>
            <label id="special-text">Special instructions
                <input
                    name="special"
                    type="text"
                    onChange={onChange}
                    value={values.special}
                />
            </label>
            <button id="order-button" disabled={disabled}>submit</button>
        </form>
    )
}