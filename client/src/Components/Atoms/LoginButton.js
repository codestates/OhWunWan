import { Link } from "react-router-dom"
import styled from "styled-components"

// localhost:3000 페이지
// 오운완 서비스를 시작하시겠습니까 버튼?

const Button = styled.span`
  /* border: 0.1em solid #000; */
  font-size: 1.5em;
  padding: 0.2em;
  border-radius: 0.4em;
  :hover{
    color: blue;
  }
`

LoginButton.defaultProps = {
  text: '오운완 서비스를 시작하시겠습니까?',
}

function LoginButton({text, onClick}) {
  return(
    <Link to='/oauth/kakao'>
      <Button>{text}</Button>
    </Link>
  )
}

export default LoginButton