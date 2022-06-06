import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledBox = styled.form`
  display:flex;
  justify-content: space-between;
  border: 1px solid black;
  width: 30vw;
`
function Box(props){
  return (
    <Fragment>
      <StyledBox>
        {props.props}
      </StyledBox>
    </Fragment>
  )
}

export default Box