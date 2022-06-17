import styled from "styled-components"
import STYLE from "../../config"
import {useDispatch,useSelector} from "react-redux"
// 포스팅 페이지 => 텍스트 입력창

const Input = styled.textarea`
  width: 37.5em;
  height: 10em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  resize: none;
  outline: none;
`

function PostInput({textHandler,editText}) {

  return (
    <Input type='text' defaultValue={editText ? editText:''} onChange={(e)=>textHandler(e.target.value)}></Input>
  )
}

export default PostInput