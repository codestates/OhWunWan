import styled from "styled-components"

// 게시글 댓글 버튼 아래 댓글 갯수

const Comment = styled.span`
  font-size: 1em;
  font-weight: bold;
  margin-left: 0.5em;
`

CommentCounts.defaultProps = {
  count: 0,
}

function CommentCounts({count}) {
  return (
    <Comment>댓글 {count}개</Comment>
  )
}

export default CommentCounts