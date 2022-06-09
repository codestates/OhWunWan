import styled from "styled-components"
// Atmos
import Logo from "../Atoms/Logo"
import OauthButton from "../Atoms/OauthButton"

// img
import kakao from "../Picture/OauthButton/kakao.png"
import google from "../Picture/OauthButton/google.png"
import naver from "../Picture/OauthButton/naver.png"

const Div = styled.div`
  width: 25em;
  height: 25em;
  /* margin-top: 15em; */
  border: 0.1em solid #000;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Div2 = styled.div`
  width: 3em;
  height: 3em;
`

function LoginBlock() {
  return(
    <Div>
      <Logo width='15em' />
      <Div2 />
      <OauthButton />
    </Div>
  )
}

export default LoginBlock