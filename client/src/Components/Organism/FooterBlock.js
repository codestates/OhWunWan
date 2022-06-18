import styled from "styled-components"
import GithubButton from "../Atoms/GithubButton"

const Div = styled.div`
width: 100vw;
height: 2.5em;
border: 0.1em solid #000;
display: flex;
justify-content: center;
align-items: center;
margin-top: 2em;
`

function FooterBlock() {
  return(
    <Div>
      <p>2022 © Team GI-GO</p>
      <GithubButton />
    </Div>
  )
}

export default FooterBlock