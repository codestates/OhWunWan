import styled from "styled-components"

// 마이페이지 - 기록실 - 종목별 참가자 총 숫자

const Span = styled.span`
  font-size: 1em;
  user-select: none; // 드래그 금지
`

function RecordTotal({record}) {
  return(
    <Span>/{record}</Span>
  )
}

export default RecordTotal