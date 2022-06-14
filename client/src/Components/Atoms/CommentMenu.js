import styled from "styled-components"

// 게시글 댓글에 들어가는 메뉴 => 삭제, 수정, 취소

// img
import menu from "../Picture/MenuButton/menu.png"

const Button = styled.div`
  width: 1em;
  height: 1em;
  background-image: url(${menu});
  background-size: contain; // 배경 사이즈: 사이즈에 맞게
  margin-right: 0.2em;
  cursor: pointer;
`

CommentMenu.defaultProps = {
  onClick: () => {console.log("메뉴 버튼 동작")}
}

function CommentMenu({onClick}) {
  return (
    <Button onClick={onClick}></Button>
  )
}

export default CommentMenu