import React, { useState, useEffect } from 'react';
import { useForm } from 'react-dom'
import { Switch, Route, Link } from 'react-router-dom';
import * as yup from 'yup';

import formSchema from '../Validation/formSchema';

const initialStateObj = {
    name: "",
    size: "",
    Pepperoni: false,
    Chicken: false,
    Sausage: false,
    Olives: false,
    Special: "",
}



const OrderForm = () => {
    const [orderObj, setorderObj] = useState(initialStateObj);
    const [orders, setOrders] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault()
        setOrders([...orders, orderObj])
        
        
    };

    const orderName = (name, value) => {
        validate(name, value)
        setorderObj({...orderObj, name: value})
        console.log(orderObj)
    }

    //  console.log(orders)

    const validate = (name, value) => {
        yup.reach(formSchema, name)
        .validate(value)
    }

    // {() => setorderObj({ ...orderObj, name: e.target.value })



    return (
        <div>
            <Link id="order-pizza" to='/'>Home</Link>
            <form id="pizza-form">
                <input name ="name" placeholder='Order Name'
                    type="text"
                    id="name-input"
                //     onChange={(e) => setorderObj({ ...orderObj, name: e.target.value })
                // }
                    onChange={(e) => orderName(e.target.name, e.target.value)}

                    
                /> 
                <select onChange={(e) => setorderObj({ ...orderObj, size: e.target.value })} id="size-dropdown">
                    <option value="Small">Small</option>
                    <option value="Meduim">Meduim</option>
                    <option value="Large">Large</option>
                </select>
                <div>
                    <div>
                        <input onClick={() => setorderObj({ ...orderObj, Pepperoni: !orderObj.Pepperoni })} type="checkbox" value="Pepperoni" />
                        <label>Pepperoni</label>
                    </div>
                    <div>
                        <input onClick={() => setorderObj({ ...orderObj, Chicken: !orderObj.Chicken })} type="checkbox" value="Chicken" />
                        <label>Chicken</label>
                    </div>
                    <div>
                        <input onClick={() => setorderObj({ ...orderObj, Sausage: !orderObj.Sausage })} type="checkbox" value="Sausage" />
                        <label>Sausage</label>
                    </div>
                    <div>
                        <input onClick={() => setorderObj({ ...orderObj, Olives: !orderObj.Olives })} type="checkbox" value="Olives" />
                        <label>Olive</label>
                    </div>
                </div>
                <div>
                <textarea onChange={(e) => setorderObj({ ...orderObj, Special: e.target.value})} placeholder="Special Instructions" type="text" id="special-text"/>
                <button onClick={(e) => handleSubmit(e)} id="order-button" type="submit">Order now</button>
                </div>
            </form>
            <div>
                    {orders.map(order => {
                        return (
                            <>
                            <h1>{order.name}</h1>
                            {
                                order.Pepperoni && <p>Pepperoni</p>
                            }
                            {
                                order.Chicken && <p>Chicken</p>
                            }
                            {
                                order.Sausage && <p>Sausage</p>
                            }
                            {
                                order.Olives && <p>Olives</p>
                            }
                            <p>{order.Special}</p>
                            </>
                        )
                    })}

            </div>
        </div>
    )
}

export default OrderForm