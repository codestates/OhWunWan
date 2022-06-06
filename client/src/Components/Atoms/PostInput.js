import styled from "styled-components"
import STYLE  from "../../config";

const Input = styled.textarea`
  width: ${props => props.comment === 'comment' ? "40em" : `${STYLE.WIDTH}`};
  height: ${props => props.comment === 'comment' ? "1.5em" : "5em"};
  font-size: 1em;
  resize: none; // 크기 변경 불가
  border: none;
`

PostInput.defaultProps = {
}

function PostInput({comment}) {
  return (
    <Input comment={comment} placeholder={comment === "comment" ? "댓글을 입력해주세요" : "글을 입력해주세요"}></Input>
  )
}

export default PostInput