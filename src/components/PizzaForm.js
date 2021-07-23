import React from "react"

export default function PizzaForm(props) {

    return (
        <form id= "pizza-form">
            <label id="name-input">Name
                <input
                    name="name"
                    type="text"
                    onChange={onchange}
                />
            </label>

            <label id="size-dropdown">Size
                <select
                    name="size"
                    onChange={onChange}
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
                />
            </label>
            <label>Ham
                <input
                    name="topping2"
                    type="checkbox"
                    onChange={onChange}
                />
            </label>
            <label>Mushrooms
                <input
                    name="topping3"
                    type="checkbox"
                    onChange={onChange}
                />
            </label>
            <label>Pineapple
                <input
                    name="topping4"
                    type="checkbox"
                    onChange={onChange}
                />
            </label>
            <label id="special-text">Special instructions
                <input
                    name="special-text"
                    type="text"
                    onchange={onChange}
                />
            </label>
        </form>
    )
}