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
            {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
            <div>{errors.username}</div>
            <div>{errors.email}</div>
            <div>{errors.role}</div>
            <div>{errors.civil}</div>
            </div>

            <label id="name-input">Name
                <input
                    name="name"
                    type="text"
                    onChange={onchange}
                    value={vaules.name}
                />
            </label>

            <label id="size-dropdown">Size
                <select
                    name="size"
                    onChange={onChange}
                    value={vaules.size}
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
                    value={vaules.topping1}
                />
            </label>
            <label>Ham
                <input
                    name="topping2"
                    type="checkbox"
                    onChange={onChange}
                    value={vaules.topping2}
                />
            </label>
            <label>Mushrooms
                <input
                    name="topping3"
                    type="checkbox"
                    onChange={onChange}
                    value={vaules.topping3}
                />
            </label>
            <label>Pineapple
                <input
                    name="topping4"
                    type="checkbox"
                    onChange={onChange}
                    value={vaules.topping4}
                />
            </label>
            <label id="special-text">Special instructions
                <input
                    name="special-text"
                    type="text"
                    onchange={onChange}
                    value={vaules.special}
                />
            </label>
            <button disabled={disabled}>submit</button>
        </form>
    )
}