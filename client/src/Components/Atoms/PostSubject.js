import styled from "styled-components"

const Subject = styled.span`
  width: 4em;
  text-align: center;
  user-select: none; // 드래그 금지
  font-weight: bold;
`

function PostSubject({text}) {
  return(
    <Subject>{text}</Subject>
  )
}

export default PostSubject