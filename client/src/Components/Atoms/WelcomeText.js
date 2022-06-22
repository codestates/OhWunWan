import styled from "styled-components"
import STYLE from "../../config"

// 웰컴페이지 사진

const Subject = styled.p`
  font-size: 3em;
  font-weight: bold;
`

function WelcomeText({text}) {
  return (
    <Subject>{text}</Subject>
  )
}

export default WelcomeText