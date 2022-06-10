import styled from "styled-components"
import STYLE from "../../config"

const Input = styled.input`
  width: 4em;
  font-size: 1em;
  text-align: center;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  margin-right: 0.2em;
`

function PostInput() {
  return (
    <Input type='text'></Input>
  )
}

export default PostInput