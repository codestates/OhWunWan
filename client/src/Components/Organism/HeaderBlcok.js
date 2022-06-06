import React, { Fragment } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import styled from 'styled-components';
import HeaderButton from '../Atoms/HeaderButton';

const StyledDiv=styled.div`
    display:flex;
`

function HeaderBlock(){

    return(
    <Fragment>
        <StyledDiv>
        <HeaderButton></HeaderButton>
        <HeaderButton></HeaderButton>
        <HeaderButton></HeaderButton>
        <HeaderButton></HeaderButton>
        <HeaderButton></HeaderButton>
        </StyledDiv>
    </Fragment>
    )
}

export default HeaderBlock