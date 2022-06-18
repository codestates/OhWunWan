import styled from "styled-components";
import { Fragment } from "react";
import STYLE from "../../config"
import Logo from "../Atoms/Logo";

// Atoms
import OauthButton from "../Atoms/OauthButton";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 99;
  display: ${props => props.isLoginModal === true ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FlexBox = styled.div`
  width: 30em;
  height: 20em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 1.5em;
  background-color: #fff;
`

function LoginModal({isLoginModal}) {
  return(
    <Fragment>
      <Div isLoginModal={isLoginModal} >
        <FlexBox>
          <Logo width='15em'/>
          <OauthButton />
        </FlexBox>
      </Div>
    </Fragment>
  )
}

export default LoginModal