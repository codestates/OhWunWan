import styled from "styled-components"

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
      <PostBlock />
    </Div>
  )
}

export default OhWunWan