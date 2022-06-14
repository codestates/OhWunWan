import styled from "styled-components"

// 일단 살려두기

// img
import loding from "../Picture/Loding/loding.svg"

const Img = styled.img`
  width: 20em;
`

function Loding() {
  return(
    <Img src={loding} />
  )
}

export default Loding