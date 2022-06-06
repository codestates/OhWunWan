import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import styled from 'styled-components';

const StyledHeaderButton = styled.div`
  width: 50px;
  height: 50px;
  background: beige;
`

// 회원정보수정 버튼 포함

function HeaderButton(){
  const select = useSelector(state=>state)
  const dispatch = useDispatch()  
  return (
    <div>
      <StyledHeaderButton inClick={(e)=>{dispatch()}}>
      </StyledHeaderButton>
    </div>
  )
}

export default HeaderButton
