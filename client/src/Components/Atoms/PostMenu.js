import styled from "styled-components"

// 1RM 포스팅 페이지, 종목선택 1RM 적혀있는 것

const Subject = styled.span`
  user-select: none; // 드래그 금지
  font-weight: bold;
  display: inline-block;
  margin-left: 0.2em;
`

function PostMenu({text}) {
  return(
    <Subject>{text}</Subject>
  )
}

export default PostMenu