import styled from "styled-components"
import FooterBlock from "../Organism/FooterBlock"

// Molecule
import LoginBox from "../Molecule/LoginBox"

const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Div2 = styled.div`
  height: 0;
`

function Welcome() {
  return(
    <Div>
      <Div2 />
      <LoginBox />
      <FooterBlock />
    </Div>
  )
}

export default Welcome