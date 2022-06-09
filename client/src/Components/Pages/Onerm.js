import styled from "styled-components"

// Atoms
import MarginBox from "../Atoms/MariginBox" // CSS용 빈 박스

// Molecule
import PostCafegoryBox from "../Molecule/PostCategoryBox"

// Organism
import HeaderBlock from "../Organism/HeaderBlock"
import PostBlock from "../Organism/PostBlock"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`


function Onerm() {
  return(
    <Div>
      <HeaderBlock />
      <MarginBox />
      <PostCafegoryBox />
      <PostBlock first='first' />
      <PostBlock />
      <PostBlock />
    </Div>
  )
}

export default Onerm