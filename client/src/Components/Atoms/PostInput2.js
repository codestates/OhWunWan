import styled from "styled-components"
import STYLE from "../../config"

const Input = styled.input`
  width: 4em;
  /* height: 1.5em; */
  font-size: 1em;
  text-align: center;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  margin-right: 0.2em;
`

function PostInput2() {
  return (
    <Input type='text'></Input>
  )
}

export default PostInput2