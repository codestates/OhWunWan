import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios'

const StyledSubmit = styled.input`
    
`



function Submit(){
    const select = useSelector((state)=>state.input)

    return (
    <div>
    <StyledSubmit type='submit' onClick={(e)=>{axios.post('http://localhost:3000',select)}} >
    </StyledSubmit>
    </div>
    )
}

export default Submit