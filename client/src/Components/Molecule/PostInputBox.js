import styled from "styled-components"
import STYLE from "../../config"
import PostInput from "../Atoms/PostInput"
import Upload from "../Atoms/Upload"

const Div = styled.div`
  width: ${STYLE.WIDTH};
  height: 13em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  display: flex;
  align-items: center;
`

function PostInputBox() {
  return(
    <Div>
      <PostInput />
      <Upload />
    </Div>
  )
}

export default PostInputBox