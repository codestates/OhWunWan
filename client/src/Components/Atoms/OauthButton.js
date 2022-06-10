import styled from "styled-components"

// img
import kakao from "../Picture/OauthButton/kakao.png"

const Button = styled.div`
  width: 16em;
  height: 4em;
  margin-bottom: 0.3em;
  border-radius: 0.5em;
  background-image: url(${props => props.img});
  background-size: contain; // 배경 사이즈: 사이즈에 맞게
  background-repeat: no-repeat; // 배경 반복: no
  background-position: center; // 배경 위치: 가운데
  cursor: pointer;
`

OauthButton.defaultProps = {
  img: kakao,
  login: () => {console.log("로그인 동작")}
}

function OauthButton({img, login}) {
  return (
    <Button img={img} onClick={login}></Button>
  )
}

export default OauthButton