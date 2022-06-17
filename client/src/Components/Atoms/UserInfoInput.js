import styled from "styled-components"
import STYLE from "../../config"

// 마이페이지 - 유저정보수정 - 닉네임 변경 입력창

const Input = styled.textarea`
  width: 39.3em;
  height: 1.5em;
  font-size: 1em;
  resize: none; // 크기 변경 불가
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  margin-right: 0.2em;
  outline: none;
`

function UserInfoInput({nicknameHandler}) {
  return (
    <Input type='text' onChange={(e)=>nicknameHandler(e.target.value)}></Input>
  )
}

export default UserInfoInput