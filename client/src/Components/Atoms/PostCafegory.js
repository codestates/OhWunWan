import styled from "styled-components"

const Button = styled.span`
  user-select: none; // 드래그 금지
  cursor: pointer;
`

function PostCafgory({subject}) {
  return (
    <Button>{subject}</Button>
  )
}

export default PostCafgory