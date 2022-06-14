import styled from "styled-components"

// 1RM 랭킹

const Respect = styled.span`
  font-size: 1em;
  font-weight: bold;
`

OnermRank.defaultProps = {
  count: 0,
}

function OnermRank({count}) {
  return (
    <Respect>{count}</Respect>
  )
}

export default OnermRank