import styled from "styled-components"

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

MenuButton.defaultProps = {
  click: () => {console.log("메뉴 버튼 동작")}
}

function MenuButton({click}) {
  return (
    <Button onClick={click}></Button>
  )
}

export default MenuButton