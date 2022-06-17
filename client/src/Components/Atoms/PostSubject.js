import styled from "styled-components"

// 포스팅 페이지 최상단 오운완, 1RM, 피드백 게시판 이름

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