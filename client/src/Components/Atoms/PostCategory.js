import styled from "styled-components"

const Button = styled.span`
  user-select: none; // 드래그 금지
  cursor: pointer;
  width: 6em;
  color: ${props => props.select === 'select' ? 'blue' : '#000'};
  text-align: center;
`

function PostCategory({subject, select, onClick}) {
  return (
    <Button select={select} onClick={onClick}>{subject}</Button>
  )
}

export default PostCategory