import React from "react";
import "./DropdownMenu.css";

function DropdownMenu (props) {
    return (
        <div className="DropdownMenu">
            <h3>Menu</h3>
                <select autofocus value={props.value} id="tea_options" onChange={props.onChange}>
                    <option value="Milk Tea">Milk Tea</option>
                    <option value="Fruit Tea">Fruit Tea</option>
                    <option value="Cheese Foam Tea">Cheese Foam Tea</option>
                    <option value="Toppings">Toppings</option>
                </select>
        </div>
    );
}

export default DropdownMenu;