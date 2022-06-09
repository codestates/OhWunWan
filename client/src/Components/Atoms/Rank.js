import styled from "styled-components"

const Span = styled.span`
  font-size: ${props => props.type === 'rank' ? '1.2em' : '1em'};
  /* margin-left: 0.2em; */
  /* width: 5em; */
  color: ${props => props.type === 'weight' ? '#2D9BF0' : '#000'};
  user-select: none; // 드래그 금지
  font-weight: ${props => props.type === 'rank' ? 'bold' :
  props.type === 'bold' ? 'bold' : 'none'};
`

function Rank({type, record}) {
  return(
    <Span type={type}>{record}</Span>
  )
}

export default Rank