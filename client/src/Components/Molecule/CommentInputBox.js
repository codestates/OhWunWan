import styled from "styled-components"
import STYLE from "../../config"
import PostInput from "../Atoms/PostInput"
import SubmitButton from "../Atoms/SubmitButton"

const Div = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.2em 0;
`

function CommentInputBox() {
  return (
    <Div>
      <PostInput comment="comment" />
      <SubmitButton />
    </Div>
  )
}

export default CommentInputBox