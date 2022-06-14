import styled from "styled-components"

// 게시글 댓글 버튼 (말풍선)

// img
import comment from "../Picture/CommentButton/comment.png"

const Button = styled.div`
  width: 2em;
  height: 2em;
  /* border: 0.1em solid #000; */
  background-image: url(${comment});
  background-size: contain; // 배경 사이즈: 사이즈에 맞게
  cursor: pointer;
  margin-left: 0.4em;
`

CommentButton.defaultProps = {
  comment: () => {console.log("댓글 접기")}
}

function CommentButton({comment}) {
  return (
    <Button onClick={comment}></Button>
  )
} 

export default CommentButton