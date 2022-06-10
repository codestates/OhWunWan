import styled from "styled-components"
import STYLE from "../../config"

const Content = styled.div`
  width: ${props => props.type === 'comment' ? '22em' : `${STYLE.WIDTH}`};
  /* border: 0.1em solid ${STYLE.BORDER_COLOR}; */
  font-size: 1em;
  margin-left: ${props => props.type === 'comment' ? '0' : '0.2em'};
`

PostContent.defaultProps = {
  text: '텍스트가 들어갈 자리입니다'
}

function PostContent({text, type}) {
  return (
    <Content type={type}>{text}</Content>
  )
}

export default PostContent