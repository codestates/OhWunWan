import styled from "styled-components"
import STYLE from '../../config'

// img
import kakao from "../Picture/OauthButton/kakao.png"
import google from "../Picture/OauthButton/google.png"
import naver from "../Picture/OauthButton/naver.png"

const Button = styled.div`
  width: 16em;
  height: 4em;
  margin-bottom: 0.3em;
  /* border: 0.1em solid #000; */
  border-radius: 0.5em;
  background-image: url(${props => props.img});
  background-size: contain; // 배경 사이즈: 사이즈에 맞게
  background-repeat: no-repeat; // 배경 반복: no
  background-position: center; // 배경 위치: 가운데
  background-color: ${props => props.img === naver ? "#03c75a" : "none"}; // 네이버 배경화면
  cursor: pointer;
`

OauthButton.defaultProps = {
  img: kakao,
  login: () => {console.log("로그인 동작")}
}

const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${STYLE.REST_API}&redirect_uri=${STYLE.REDIRECT_URI}&response_type=code`

function OauthButton({img, login}) {
  return (
    <Button img={img} onClick={() => {window.location.assign(KAKAO_LOGIN_URL)}}></Button>
  )
}

export default OauthButton