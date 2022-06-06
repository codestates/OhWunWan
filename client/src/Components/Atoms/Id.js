import styled from "styled-components"

const Name = styled.span`
  font-size: 1em;
  margin-left: 0.2em;
  user-select: none; // 드래그 금지
`

Id.defaultProps = {
  nickname: 'codestates'
}

function Id({nickname}) {
  return(
    <Name>{nickname}</Name>
  )
}

export default Id