import styled from "styled-components"

const Name = styled.span`
  font-size: ${props => props.type === 'user' ? '1.6em' : '1em'};
  margin-left: 0.2em;
  width: 5em;
  user-select: none; // 드래그 금지
  /* border: 0.1em solid #000; */
  font-weight: ${props => props.type === 'user' ? 'bold' : 
  props.type === 'mypage' ? 'bold' : 'none'}
`

Id.defaultProps = {
  nickname: 'codestates'
}

function Id({nickname, type}) {
  return(
    <Name type={type}>{nickname}</Name>
  )
}

export default Id