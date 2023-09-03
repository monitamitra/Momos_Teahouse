import React, {useState} from "react";

import MilkTeaList from "./MilkTeaList";
import FruitTeaList from "./FruitTeaList";
import ToppingList from "./ToppingList";
import CheeseFoamList from "./ColdCheeseFoamTeaMenu/CheeseFoamList";

import {milkTeaFlavors} from "./MilkTeaFlavors";
import {fruitTeaFlavors} from "./FruitTeaFlavors";
import {cheeseFoamFlavors} from "./CheeseFoamFlavors";
import {diffToppings} from "./TopppingTypes";


import DropdownMenu from "./DropdownMenu";
import MainNavBar from "./NavBar";

function ChangeTea() {
  const [choice, setChoice] = useState("Milk Tea");
  
        const handleChange = (e) => {
        setChoice(e.target.value);
    }

    return (
        <div>
        <MainNavBar />
        <DropdownMenu value={choice} onChange={(e) => handleChange(e)}/>
        {choice === "Milk Tea" ? <MilkTeaList MilkTeas={milkTeaFlavors}/>: ""}
        {choice === "Toppings" ? <ToppingList Toppings={diffToppings}/>: ""}
        {choice === "Fruit Tea" ? <FruitTeaList FruitTeas={fruitTeaFlavors}/>: ""}
        {choice === "Cheese Foam Tea" ? <CheeseFoamList CheeseFoamTeas={cheeseFoamFlavors}/>: ""}
        </div>
    );
}

export default ChangeTea;