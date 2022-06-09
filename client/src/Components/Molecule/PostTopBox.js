import styled from "styled-components"
import HeaderButton from "../Atoms/HeaderButton"
import Id from "../Atoms/Id"
import MenuButton from "../Atoms/MenuButton";
import STYLE from "../../config"

// img
import user from "../Picture/HeaderButton/user.png";
import menu from "../Picture/MenuButton/menu.png"

const Div = styled.div`
  display: flex;
  align-items: center;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  width: ${STYLE.WIDTH};
  justify-content: space-between;
  /* margin-top: 2em; */
  height: 2em;
`

const Div2 = styled.div`
  display: flex;
  align-items: center;
`

function PostTopBox() {
  return (
    <Div>
      <Div2>
        <HeaderButton type='post' img={user} />
        <Id nickname="손흥민"/>
      </Div2>
      <MenuButton />
    </Div>
  )
}

export default PostTopBox