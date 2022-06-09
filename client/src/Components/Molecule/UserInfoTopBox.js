import styled from "styled-components";
import STYLE from "../../config";
import Id from "../Atoms/Id"
import HeaderButton from "../Atoms/HeaderButton";
import Rank from "../Atoms/Rank"
import PostInput from "../Atoms/PostInput";
import SubmitButton from "../Atoms/SubmitButton"
import user from "../Picture/HeaderButton/user.png"

const Div = styled.div`
  width: ${STYLE.WIDTH};
  /* height: 3em; */
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  padding: 0.4em 0;
`

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
`

const Div3 = styled.div`
  display: flex;
  align-items: center;
`

const Div4 = styled.div`
  
`

function UserInfoTopBox() {
  return(
    <Div>
      <Div3>
        <Div2>
          <HeaderButton circle='circle' img={user} />
        </Div2>
        <Div2>
          <Id record='codestates' />
          <Rank record='프로필 사진 바꾸기' type='weight' />
        </Div2>
      </Div3>

      <Div4>
        <Rank record='닉네임' type='bold' />
        <Div3>
          <PostInput comment='comment' type='nickname'/>
          <SubmitButton text='변경' type='nickname'/>
        </Div3>
      </Div4>      
    </Div>
  )
}

export default UserInfoTopBox