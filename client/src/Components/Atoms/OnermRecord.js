import styled from "styled-components"

// 1RM 기록

const Respect = styled.span`
  font-size: 1em;
  font-weight: bold;
  margin-right: 0.2em;
  color: #2D9BF0;
`

OnermRecord.defaultProps = {
  record: 0,
}

function OnermRecord({record}) {
  return (
    <Respect>{record}KG</Respect>
  )
}

export default OnermRecord