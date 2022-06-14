import styled from "styled-components"
import STYLE from "../../config"
import HeaderButton from "../Atoms/HeaderButton"
import Id from "../Atoms/Id"
import PostContent from "../Atoms/PostContent"
import MenuButton from "../Atoms/MenuButton"

// img
import user from "../Picture/HeaderButton/user.png";

const Div = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  padding: 0.2em 0;
`

const Div2 = styled.div`
  display: flex;
  align-items: center;
`

function CommentBox() {
  return (
    <Div>
      <Div2>
        <HeaderButton type='post' img={user} />
        <Id nickname="손흥민"/>
        <PostContent text="운동 열심히 하시네요!" type='comment' />
        <MenuButton />
      </Div2>
    </Div>
  )
}

export default CommentBox