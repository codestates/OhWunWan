import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios'

const StyledSubmit = styled.input`
    border:none;
    background-color:white;
    color: skyblue;
    cursor: pointer;
`


function Submit(){
    const select = useSelector((state)=>state.input)

    return (
    <div>
    <StyledSubmit type='submit' value="게시"  onClick={(e)=>{axios.post('https://',select)}} >
    </StyledSubmit>
    </div>
    )
}

export default Submit