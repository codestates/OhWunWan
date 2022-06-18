import { Link } from "react-router-dom"
import styled from "styled-components"
import STYLE from "../../config"

// localhost:3000 페이지
// 오운완 서비스를 시작하시겠습니까 버튼?
// start 버튼

const Text = styled.span`
  font-size: 1.5em;
  margin-top: 1em;
  :hover {
    color: green;
  }
  cursor: pointer;
`

LoginButton.defaultProps = {
  text: 'Start',
}

function LoginButton() {
  return(
    <Text onClick={() => console.log(1)}>오운완 서비스를 시작하시겠습니까?</Text>
  )
}

export default LoginButton