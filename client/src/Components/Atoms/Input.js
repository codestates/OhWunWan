import React from 'react';
import styled from 'styled-components';
import {useSelector,useDispatch}  from 'react-redux';
import {input} from "../../Ducks/Slice/InputSlice"


const StyledInput = styled.input`
  border: none ;
  cursor: pointer;
`

function Input(props){
    const select =useSelector((state)=>state)
    const dispatch = useDispatch()
    
    return (
        <div>
            <StyledInput type="text" onChange={(e)=>{dispatch(input(e.target.value))}} placeholder={props.props}>
            </StyledInput>
        </div>
    )
};

export default Input