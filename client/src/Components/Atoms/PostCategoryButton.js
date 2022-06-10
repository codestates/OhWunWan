import styled from "styled-components"
import STYLE from "../../config"

const Button = styled.span`
  /* border: 0.1em solid #000; */
  width: 3em;
  text-align: center;
  border: none;
  border-radius: 0.3em;
  padding: 0.2em;
  user-select: none; // 드래그 금지
  display:inline-block;
  color: #fff;
  padding: 0.1em;
  background-color: #2D9BF0;
  cursor: pointer;
`

function PostCategoryButton({text}) {
  return(
    <Button>{text}</Button>
  )
}

export default PostCategoryButton