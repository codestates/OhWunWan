import styled from "styled-components"
import { Fragment } from "react";
import STYLE from "../../config";

// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";

// 더미 사진
import user from "../Picture/HeaderButton/user.png"

// Atoms
import UserinfoPicture from "../Atoms/UserinfoPicture";
import Id from "../Atoms/Id";
import CommentSubmit from "../Atoms/CommentSubmit";
import UserInfoInput from "../Atoms/UserInfoInput";
import UserInfoSubmit from "../Atoms/UserInfoSubmit";
import UserInfoSubmit2 from "../Atoms/UserInfoSubmit2";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Box = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
`

const Box2 = styled.div`
  height: 40em;
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`

const FlexBox2 = styled.div`
  display: flex;
  flex-direction: column; // 플렉스 세로
  margin-left: 0.5em;
`

const BetweenBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${STYLE.WIDTH};
  margin-top: 0.5em;
`

function UserInfo() {
  return (
    <Fragment>
      <Wrap>
        <HeaderBlock />
        <MarginBox />

        <Box>
          <FlexBox>
            <UserinfoPicture img={user} />
            <FlexBox2>
              <Id nickname='코드스테이츠' />
              <CommentSubmit text='프로필 사진 바꾸기' />
            </FlexBox2>
          </FlexBox>

          <div>
            <Id text='닉네임' />
            <FlexBox>
              <UserInfoInput />
              <UserInfoSubmit onClick={() => {}} />
            </FlexBox>
          </div>
        </Box>

        <Box>
          <Box2>
            <BetweenBox>
              <span>회원탈퇴를 진행하시고, 되돌릴 수 없으니 신중히 선택해주세요.</span>
              <UserInfoSubmit2 onClick={() => {}}/>
            </BetweenBox>
          </Box2>
          
        </Box>

      </Wrap>
    </Fragment>
  )
}

export default UserInfo