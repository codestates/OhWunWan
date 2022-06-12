import styled from "styled-components"
import STYLE  from "../../config";

const Input = styled.textarea`
  width: 40em;
  height: 1.5em;
  font-size: 1em;
  resize: none; // 크기 변경 불가
  border: none;
  outline: none;
`

function CommentInput() {
  return (
    <Input placeholder="댓글을 입력해주세요"></Input>
  )
}

export default CommentInput