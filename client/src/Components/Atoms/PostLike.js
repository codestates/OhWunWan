import styled from "styled-components"

const Like = styled.span`
  font-size: 1em;
  font-weight: bold;
  margin-left: 0.2em;
`

PostLike.defaultProps = {
  count: 0,
  subject: "like"
}

function PostLike({count, subject}) {
  return (
    <Like>{subject} {count}개</Like>
  )
}

export default PostLike