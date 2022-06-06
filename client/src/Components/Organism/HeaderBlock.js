import styled from "styled-components"
import { Fragment } from "react";

// img
import logo from "../Picture/Logo/logo.svg"
import post from "../Picture/HeaderButton/post.png";
import ohwunwan from "../Picture/HeaderButton/ohwunwan.png";
import onerm from "../Picture/HeaderButton/1rm.png";
import feedback from "../Picture/HeaderButton/feedback.png";
import user from "../Picture/HeaderButton/user.png";

// Atmos
import HeaderButton from "../Atoms/HeaderButton";
import Logo from "../Atoms/Logo";

const Div = styled.div`
  width: 100vw;
  height: 3.2em;
  border: 0.1em solid #000;
  text-align: center;
  vertical-align: middle;
`

const Div2 = styled.div`
  display: flex;
  position: fixed;
  top: 0.1em;
  right: 0;
`

function HeaderBlock() {
  return(
    <Fragment>
    <Div>
      <Logo />
      <Div2>
        <HeaderButton img={post} circle='circle' />
        <HeaderButton img={ohwunwan} />
        <HeaderButton img={onerm} />
        <HeaderButton img={feedback} />
        <HeaderButton img={user} circle='circle' />
      </Div2>
    </Div>
    </Fragment>
  )
}

export default HeaderBlock