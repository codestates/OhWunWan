import styled from "styled-components"
import STYLE from "../../config"

const Button = styled.span`
  /* border: 0.1em solid #000; */
  width: ${props => props.type === 'user' ? '20em' : '3em'};
  text-align: center;
  border: ${props => props.type === 'user' ? `0.1em solid ${STYLE.BORDER_COLOR}` : 'none'};
  border-radius: 0.3em;
  padding: 0.2em;
  user-select: none; // 드래그 금지
  display:inline-block;
  color: ${props => props.type === 'user' ? '#000' : '#fff'};
  padding: '0.1em';
  background-color: ${props => props.type === 'user' ? '#fff' : '#2D9BF0'};
  cursor: pointer;
  margin-right: ${props => props.type === 'user' ? '0.2em' : 'none'};
`

function PostCategoryButton({text, type}) {
  return(
    <Button type={type}>{text}</Button>
  )
}

export default PostCategoryButton