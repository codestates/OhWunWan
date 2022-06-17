import styled from "styled-components"

// 헤더랑 게시글 중간에 마진용으로 사용

const Div = styled.div`
  margin-top: 3.6em;
`

function MarginBox({type}) {
  return (
    <Div type={type}></Div>
  )
}

export default MarginBox