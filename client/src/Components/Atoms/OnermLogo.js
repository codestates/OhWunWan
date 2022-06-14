import styled from "styled-components"

// 1rm 랭킹 옆 로고

// img
import logo from "../Picture/Onerm/trophy.png"

const Image = styled.img`
  width: 1.5em;
  margin-right: 0.2em;
`

OnermLogo.defaultProps = {
  img: logo
}

function OnermLogo({img}) {
  return (
    <Image src={img}></Image>
  )
}

export default OnermLogo