import styled from "styled-components"
import STYLE from "../../config"
import PostPicture from "../Atoms/PostPicture"

const Div = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
`

function PostPictureBox() {
  return(
    <Div>
      <PostPicture />
    </Div>
  )
}

export default PostPictureBox