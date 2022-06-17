import styled from "styled-components"
import STYLE from "../../config"

// 포스팅 페이지 (1RM) => KG 작성창

const Input = styled.input`
  width: 4.7em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  outline: none;
  text-align: center;
`

function PostInput2({weightHandler,editWeight}) {
  return (
    <Input type='text' defaultValue={editWeight? editWeight:''} onChange={(e)=>{weightHandler(e.target.value)}}></Input>
  )
}

export default PostInput2