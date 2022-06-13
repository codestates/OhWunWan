import styled from "styled-components"
import STYLE from "../../config"

// 게시글 - 댓글부분의 내용

const Content = styled.span`
  font-size: 1em;
  margin-left: 3em;
`

Comment.defaultProps = {
  text: '텍스트가 들어갈 자리입니다'
}

function Comment({text}) {
  return (
    <Content>{text}</Content>
  )
}

export default Comment