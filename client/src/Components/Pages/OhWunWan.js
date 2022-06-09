import styled from "styled-components"

// Atoms
import MarginBox from "../Atoms/MarginBox" // CSS용 빈 박스

// Organism
import HeaderBlock from "../Organism/HeaderBlock"
import PostBlock from "../Organism/PostBlock"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

function OhWunWan() {
  return(
    <Div>
      <HeaderBlock />
      <MarginBox /> 
      <PostBlock first='first' />
      <PostBlock />
      <PostBlock />
    </Div>
  )
}

export default OhWunWan