import { Fragment } from "react"
import styled from "styled-components"
import LoginBlock from "../Organism/LoginBlock"
import FooterBlock from "../Organism/FooterBlock"

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


function Login() {
  return(
    <Div>
      <Div2 />
      <LoginBlock />
      <FooterBlock />
    </Div>
  )
}

export default Login