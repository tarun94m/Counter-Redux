import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { decNumber, incNumber } from '../../action/Index';
import counterSlice from './CounterSlice';

const actions=counterSlice.actions;

function Counter(){

    const count=useSelector((store)=>{
        return store.counterState.count
    });

    const dispatch=useDispatch();

    const handleIncrement = () => {
        console.log("increment will happen");
        dispatch(actions.increment());
    }
    
    const handleDecrement = () => {
        console.log("decrement will happen");
        dispatch(actions.decrement());
    }
    
    return(
        <>
            <button onClick = {handleIncrement}> + </button>
            <h3>{count}</h3>
            <button onClick = {handleDecrement}> - </button>
        </>
    )
}

export default Counter