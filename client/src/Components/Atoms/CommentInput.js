import styled from "styled-components"
import { useDispatch } from "react-redux";
import { comment } from "../../Ducks/Slice/CommentSlice"

// 게시글 - 댓글 입력창

const Input = styled.textarea`
  width: 40em;
  height: 1.5em;
  font-size: 1em;
  resize: none; // 크기 변경 불가
  border: none;
  outline: none;
`

function CommentInput() {
  const dispatch = useDispatch()
  return (
    <Input placeholder="댓글을 입력해주세요" onChange={(e) => {dispatch(comment({comment: e.target.value}))}}></Input>
  )
}

export default CommentInput