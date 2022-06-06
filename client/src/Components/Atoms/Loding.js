import styled from "styled-components"

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