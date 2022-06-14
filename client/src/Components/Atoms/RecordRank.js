import styled from "styled-components"

// 마이페이지 - 기록실 - 등수

const Span = styled.span`
  font-size: 1.2em;
  user-select: none; // 드래그 금지
  font-weight: bold;
`

function RecordRank({record}) {
  return(
    <Span>{record}</Span>
  )
}

export default RecordRank