import React from 'react';
import {useSelector,useDispatch}  from 'react-redux';
import {input} from "../../Ducks/Slice/InputSlice"


function Input(){
    const select =useSelector((state)=>state)
    const dispatch = useDispatch()
    
    return (
        <div>
            <input type="text" onChange={(e)=>{dispatch(input(e.target.value))}}>
            </input>
        </div>
    )
};

export default Input