import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { logout_modal } from "../../Ducks/Slice/LogoutSlice";

// img
import post from "../Picture/HeaderButton/post.png";
import ohwunwan from "../Picture/HeaderButton/ohwunwan.png";
import onerm from "../Picture/HeaderButton/1rm2.png";
import feedback from "../Picture/HeaderButton/feedback.png";
import user from "../Picture/HeaderButton/user.png";
import logouticon from "../Picture/HeaderButton/logout.png";

// Atmos
import HeaderButton from "../Atoms/HeaderButton";
import Logo from "../Atoms/Logo";
import axios from 'axios';

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
  let select = useSelector(state => state)
  const dispatch = useDispatch()

  return(
    <Fragment>
      <Div>
        <Logo />
        <Div2>
          <Link to='/post'>
            {select.header.header === 'post' ? 
              <HeaderButton img={post} circle='circle' select/>
            : <HeaderButton img={post} circle='circle'  />
            }
          </Link>

          <Link to='/ohwunwan'>
            {select.header.header === 'ohwunwan' ? 
              <HeaderButton img={ohwunwan} circle='circle' select/>
            : <HeaderButton img={ohwunwan} circle='circle'  />
            }
          </Link>

          <Link to='/1rm'>
            {select.header.header === '1rm' ? 
              <HeaderButton img={onerm} circle='circle' select/>
            : <HeaderButton img={onerm} circle='circle'  />
            }
          </Link>

          <Link to='/feedback'>
            {select.header.header === 'feedback' ? 
              <HeaderButton img={feedback} circle='circle' select/>
            : <HeaderButton img={feedback} circle='circle'  />
            }
          </Link>

          <Link to='/user'> 
          {select.header.header === 'mypage' ? 
            <HeaderButton 
              img={logouticon} 
              circle='circle' 
              select
              onClick={() => dispatch(logout_modal(true))}
            /> 
            : <HeaderButton img={select.auth.user_info.profile_picture} circle='circle' 
          />}
          </Link>
        </Div2>
      </Div>
    </Fragment>
  )
}

export default HeaderBlock