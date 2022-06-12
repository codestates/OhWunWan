import styled from "styled-components";
import { Fragment } from "react"

import { API } from "../config";
import kakao from './kakao.png'

const OauthButton = styled.img`
  width: 200px;
`

const LoginBlock = styled.div`
  min-width: 20em;
  width: 35em;
  height: 35em;
  border: 1px solid #000;
`

function Welcome() {
  return (
    <Fragment>
      <LoginBlock>
        <p>오늘운동완료(로고)</p>
        <a href={API.KAKAO_AUTH_URL}>
          <OauthButton src={kakao} />
        </a>
      </LoginBlock>
    </Fragment>
  )
}

export default Welcome