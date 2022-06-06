import styled from "styled-components"

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