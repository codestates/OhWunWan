import styled from "styled-components"
import STYLE from "../../config"

// 게시글 - 게시글 내용

const Content = styled.div`
  width: ${STYLE.WIDTH};
  font-size: 1em;
  margin-left: 0.2em;
`

ContentText.defaultProps = {
  text: '텍스트가 들어갈 자리입니다'
}

function ContentText({text}) {
  return (
    <Content>{text}</Content>
  )
}

export default ContentText