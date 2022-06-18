import styled from "styled-components"

// 헤더 중앙 로고
// 로그인 로고

// img
import logo from "../Picture/Logo/logo.svg"

const Image = styled.img`
  width: ${props => props.width ? props.width : '10em'}
`

Logo.defaultProps = {
  img: logo
}

function Logo({img, width}) {
  return (
    <Image src={img} width={width}></Image>
  )
}

export default Logo