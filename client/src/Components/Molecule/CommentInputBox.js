import React, { Fragment } from 'react';
import styled from 'styled-components';
import Input from '../Atoms/Input';
import Submit from '../Atoms/Submit';

const StyledCommentInputBox = styled.form`
  display:flex;
  justify-content: space-between;
  border: 1px solid black;
  width: 30vw;
  `

function CommentInputBox(){
  return (
    <Fragment>
    <StyledCommentInputBox action='데이터를 보낼 서버 페이지의 주소'>
      <Input props={"을 입력해주세요"}>
      </Input>
      <Submit></Submit>
    </StyledCommentInputBox>
    </Fragment>
  )
}

export default CommentInputBox