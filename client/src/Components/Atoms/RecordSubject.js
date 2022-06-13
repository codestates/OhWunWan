import styled from "styled-components"

// 마이페이지 - 기록실 - 종목

const Button = styled.span`
  user-select: none; // 드래그 금지
  cursor: pointer;
  width: 6em;
  text-align: center;
  font-weight: bold;
`

function RecordSubject({subject}) {
  return (
    <Button>{subject}</Button>
  )
}

export default RecordSubject