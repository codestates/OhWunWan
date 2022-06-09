import styled from "styled-components"
import LoginButton from "../Atoms/LoginButton"

const Div = styled.div`
  width: 30em;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1em solid #000;
  border-radius: 1.5em;
`

function LoginBox() {
  return(
    <Div>
      <LoginButton />
    </Div>
  )
}

export default LoginBox