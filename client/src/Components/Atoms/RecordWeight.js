import styled from "styled-components"

// 마이페이지 - 기록실 - 무게

const Span = styled.span`
  color: #2d9bf0;;
  user-select: none; // 드래그 금지
`

function RecordWeight({record}) {
  return(
    <Span>{record}</Span>
  )
}

export default RecordWeight