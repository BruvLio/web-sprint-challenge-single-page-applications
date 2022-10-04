import React, { useState } from 'react';


const initialStateObj = {
    name: "",
    size: "",
    Pepperoni: false,
    Chicken: false,
    Sausage: false,
    Olives: false,
    special: "",
}



export default function OrderForm () {


    const [orderObj, setorderObj] = useState(initialStateObj);

    const onChange = (e) => {
        
    }

    const handleSubmit = () => {

    }

    return (
        <form>
            <input 
                type="text" 
                id="name-input"
                onChange={(e) => setorderObj({...orderObj,name:e.target.value})}


            />
            <select id="size-dropdown">
                <option>Small</option>
                <option>Meduim</option>
                <option>Large</option>
            </select>
            <div>
                <input type="checkbox">Pepperoni</input>
                <input type="checkbox">Chicken</input>
                <input type="checkbox">Sausage</input>
                <input type="checkbox">Olives</input>
            </div>
            <input type="text" id="Special-text"/>
            <button id="order-button" onSubmit={handleSubmit}>Order now</button>
        </form>
    )
}