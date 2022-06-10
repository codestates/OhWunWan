import styled from "styled-components"

const Name = styled.span`
  font-size: 1em;
  margin-left: 0.2em;
  width: 5em;
  user-select: none; // 드래그 금지
  font-weight: bold;
`

Id.defaultProps = {
  nickname: 'codestates'
}

function Id({nickname}) {
  return(
    <Name >{nickname}</Name>
  )
}

export default Id