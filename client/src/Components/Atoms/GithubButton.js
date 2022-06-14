import styled from "styled-components"

// footer 깃허브 버튼

// img
import github from "../Picture/GithubButton/github.png"

const Button = styled.div`
  width: 2em;
  height: 2em;
  margin-left: 1em;
  /* border: 0.1em solid #000; */
  background-image: url(${github});
  background-size: contain; // 배경 사이즈: 사이즈에 맞게
  cursor: pointer;
`

function GithubButton() {
  return (
    <a href="https://github.com/codestates/OhWunWan" target="_blank" rel="noopener noreferrer">
      <Button></Button>
    </a>
  )
} 

export default GithubButton