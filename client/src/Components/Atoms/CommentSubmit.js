import styled from "styled-components"

// 게시글 - 댓글 게시 버튼

const Button = styled.span`
  user-select: none; // 드래그 금지
  display: inline-block;
  color: #2D9BF0;
  cursor: pointer;
`

CommentSubmit.defaultProps = {
  text: '게시',
  onClick: () => {console.log('제출 버튼 동작')}
}

function CommentSubmit({text, onClick}) {
  return(
    <Button onClick={onClick}>{text}</Button>
  )
}

export default CommentSubmit