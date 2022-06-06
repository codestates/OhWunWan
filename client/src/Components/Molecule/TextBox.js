import styled from "styled-components"
import STYLE from "../../config"
import PostContent from "../Atoms/PostContent"

const Div = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
`

function TextBox() {
  return (
    <Div>
      <PostContent text='6월 6일 오운완 인증해요!' />
    </Div>
  )
}

export default TextBox