import styled from "styled-components"

const Like = styled.span`
  font-size: 1em;
  font-weight: bold;
  margin-left: 0.2em;
`

LikeCounts.defaultProps = {
  count: 0,
}

function LikeCounts({count}) {
  return (
    <Like>좋아요 {count}개</Like>
  )
}

export default LikeCounts