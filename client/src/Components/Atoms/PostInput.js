import styled from "styled-components"
import STYLE  from "../../config";

const Input = styled.textarea`
  width: ${props => props.comment === 'comment' ? "34em" : "92%"};
  height: ${props => props.comment === 'comment' ? "1.5em" : "15em"};
  font-size: 1em;
  resize: none; // 크기 변경 불가
  border: none;
`

PostInput.defaultProps = {
}

function PostInput({comment, type}) {
  return (
    <Input comment={comment} placeholder={comment === "comment" ? "댓글을 입력해주세요" : 
    type === "nickname" ? "바꾸실 닉네임을 입력하세요" : "댓글을 입력해주세요"}></Input>
  )
}

export default PostInput