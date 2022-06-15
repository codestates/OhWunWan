import styled from "styled-components"

// 게시글 댓글 버튼 (말풍선)

// img
import img from "../Picture/ContentMoreButton/read-more.png"

const Button = styled.div`
  width: 4em;
  height: 4em;
  background-image: url(${img});
  background-size: contain; // 배경 사이즈: 사이즈에 맞게
  cursor: pointer;
  margin-bottom: 2em;
`

function ContentMoreButton({onClick}) {
  return (
    <Button onClick={onClick}></Button>
  )
} 

export default ContentMoreButton