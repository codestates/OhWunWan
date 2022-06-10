import styled from "styled-components";
import STYLE from "../../config";
import PostSubject from "../Atoms/PostSubject";
import SubmitButton from "../Atoms/SubmitButton"

const Div = styled.div`
  width: ${STYLE.WIDTH};
  height: 2em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function PostSubmitBox() {
  return(
    <Div>
      <PostSubject />
      <PostSubject text='오운완' />
      <SubmitButton type='content' text='업로드' />
    </Div>
  )
}

export default PostSubmitBox