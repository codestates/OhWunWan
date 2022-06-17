import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"
import { Fragment } from "react";
import STYLE from "../../config"
import SubmitButton from "../Atoms/SubmitButton"
import { logout_modal } from "../../Ducks/Slice/LogoutSlice";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Div2 = styled.div`
  width: 20em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  text-align: center;
  padding: 0.2em 0;
  background-color: #fff;
`

function LogoutModal({logoutHandler}) {
  let select = useSelector(state => state)
  const dispatch = useDispatch()

  return(
    <Fragment>
      <Div>
        <Div2>
          <SubmitButton text='로그아웃' type='red' onClick={() => {logoutHandler()}} />
        </Div2>
        <Div2>
          <SubmitButton text='취소' type='black' onClick={() => dispatch(logout_modal(false))} />
        </Div2>
      </Div>
    </Fragment>
  )
}

export default LogoutModal