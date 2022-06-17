import styled from "styled-components"

// 게시글 리스펙 버튼 아래 리스펙 갯수

const Respect = styled.span`
  font-size: 1em;
  font-weight: bold;
  margin-left: 0.2em;
`

RespectCounts.defaultProps = {
  count: 0,
}

function RespectCounts({count}) {
  return (
    <Respect>리스펙 {count}개</Respect>
  )
}

export default RespectCounts