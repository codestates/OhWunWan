import styled from "styled-components"

const Div = styled.div`
  margin-top: ${props => props.type !== 'cafegory' ? '3.8em' : '3.6em'}
`

function MarginBox({type}) {
  return (
    <Div type={type}></Div>
  )
}

export default MarginBox