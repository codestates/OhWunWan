import styled from "styled-components"

// 헤더 중앙 로고
// 로그인 로고

// img
import logo from "../Picture/Logo/logo.svg"

const Image = styled.img`
  width: 10em;
`

Logo.defaultProps = {
  img: logo
}

function Logo({img}) {
  return (
    <Image src={img}></Image>
  )
}

export default Logo