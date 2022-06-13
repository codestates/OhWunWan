import styled from "styled-components"
import { Fragment } from "react";
import { Link } from "react-router-dom";

// 사용중

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
  height: 3.5em;
  border: 0.1em solid #000;
  text-align: center;
  vertical-align: middle;
  position: fixed;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`

const Div2 = styled.div`
  display: flex;
  position: fixed;
  top: 0.4em;
  right: 0;
`

function HeaderBlock() {
  return(
    <Fragment>
    <Div>
      <Logo />
      <Div2>
        <Link to='/post'>
          <HeaderButton img={post} circle='circle' />
        </Link>

        <Link to='/ohwunwan'>
          <HeaderButton img={ohwunwan} />
        </Link>

        <Link to='/1rm'>
          <HeaderButton img={onerm} />
        </Link>

        <Link to='/feedback'>
        <HeaderButton img={feedback} />
        </Link>

        <Link to='/user'> 
        <HeaderButton img={user} circle='circle' />
        </Link>
      </Div2>
    </Div>
    </Fragment>
  )
}

export default HeaderBlock