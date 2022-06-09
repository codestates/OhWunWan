import styled from "styled-components";
import STYLE from "../../config";
import { Link } from "react-router-dom";
import HeaderButton from "../Atoms/HeaderButton";
import Id from "../Atoms/Id";
import PostCategoryButton from "../Atoms/PostCategoryButton";

// img
import user from "../Picture/HeaderButton/user.png"

const Div = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4em 0;
`

const Div2 = styled.div`
  /* width: 70%; */
  /* border: 0.1em solid ${STYLE.BORDER_COLOR}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
`

function UserTopBox() {
  return (
    <Div>
      <HeaderButton img={user} type="user"/>
      <Div2>
        <Id nickname='codestates' type='user' />
        <Link to='/userinfo'>
          <PostCategoryButton text='회원 정보 수정' type='user' />
        </Link>
      </Div2>
    </Div>
  )
}

export default UserTopBox