import styled from "styled-components"
import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import STYLE from "../../config";
import { header } from "../../Ducks/Slice/HeaderSlice";
import { Link } from "react-router-dom";
import axios from 'axios';

import { logout_modal } from '../../Ducks/Slice/LogoutSlice';

// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";
import MypageButton from "../Atoms/MypageButton";

// 더미 사진
import user from "../Picture/HeaderButton/user.png"
import pic1 from "../Picture/ContentPicture/pic1.webp"
import liked from "../Picture/LikeButton/liked.png"

// Atoms
import MypagePicture from "../Atoms/MypagePicture";
import MypageId from "../Atoms/MypageId";
import RecordSubject from "../Atoms/RecordSubject";
import RecordRank from "../Atoms/RecordRank";
import RecordTotal from "../Atoms/RecordTotal";
import RecordWeight from "../Atoms/RecordWeight";
import Id from "../Atoms/Id";
import ProfilePicture from "../Atoms/ProfilePicture";
import ContentPicture from "../Atoms/ContentPicture";
import LikeButton from "../Atoms/LikeButton";
import CommentButton from "../Atoms/CommentButton";
import LikeCounts from "../Atoms/LikeCounts";
import CommentCounts from "../Atoms/CommentCounts";
import ContentTime from "../Atoms/ContentTime";
import ContentText from "../Atoms/ContentText";
import Comment from "../Atoms/Comment";
import CommentInput from "../Atoms/CommentInput";
import CommentSubmit from "../Atoms/CommentSubmit";
import ContentButton from "../Atoms/ContentButton";
import CommentMenu from "../Atoms/CommentMenu";

// Organism
import LogoutModal from "../Organism/LogoutModal";
import ContentModal from "../Organism/ContentModal";
import CommentModal from "../Organism/CommentModal";

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

const BorderBox = styled.div`
  width: ${STYLE.WIDTH};
  display: flex;
  align-items: center;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
`

const CenterBox = styled.div`
  width: ${STYLE.WIDTH};
  display: flex;
  justify-content: center;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
`

const BetweenBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${STYLE.WIDTH};
`

const AroundBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${STYLE.WIDTH};
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`

const FlexBox2 = styled.div`
  display: flex;
  flex-direction: column; // 플렉스 세로
  /* border: 0.1em solid #000; */
  /* width: 32em; */
  margin-left: 1em;
`
const FlexBox3 = styled.div`
width: 6em;
display: flex;
align-items: center;
justify-content: center;
`

const PostBlock = styled.div`
  margin-bottom: 2em;
`

const CommentBlock = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
`

function Mypage() {
  // 메뉴 열고 닫기
  const [contentMenu, setContentMenu] = useState(false)
  const [commentMenu, setCommentMenu] = useState(false)

  // 현재 페이지
  let select = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(header({header: 'mypage'}))
  }, [])
  
  //로그아웃 핸들러 
  const logoutHandler = () => {
    axios.post("https://localhost:4000/auth/logout")
    .then((res)=>{dispatch(logout_modal(false));window.location.replace("https://localhost:3000/")})
  }

  return(
    <Fragment>
      <Wrap>
        {/* 로그아웃 모달 */}
        {select.logout_modal.logout_modal ? <LogoutModal logoutHandler={logoutHandler}/> : null}

        {/* 메뉴 열고 닫기 */}
        {contentMenu ? <ContentModal setContentMenu={setContentMenu} /> : null}
        {commentMenu ? <CommentModal setCommentMenu={setCommentMenu} /> : null}
        
        <HeaderBlock />
        <MarginBox />

        <BorderBox>
          <MypagePicture img={user} />
          <FlexBox2>
            <MypageId nickname='코드스테이츠' />
            <Link to='/userinfo'>
              <MypageButton text='회원정보수정' />
            </Link>
          </FlexBox2>
        </BorderBox>

        <Box>
          <AroundBox>
            <RecordSubject subject='벤치프레스' />
            <RecordSubject subject='데드프레스' />
            <RecordSubject subject='스쿼트' />
          </AroundBox>
          <AroundBox>
            <FlexBox3>
              <RecordRank record='33' />
              <RecordTotal record='50' />
            </FlexBox3>
            <FlexBox3>
              <RecordRank record='34' />
              <RecordTotal record='51' />
            </FlexBox3>
            <FlexBox3>
              <RecordRank record='35' />
              <RecordTotal record='52' />
            </FlexBox3>
          </AroundBox>
          <AroundBox>
            <FlexBox3>
              <RecordWeight record='10' />kg
            </FlexBox3>
            <FlexBox3>
              <RecordWeight record='15' />kg
            </FlexBox3>
            <FlexBox3>
              <RecordWeight record='20' />kg
            </FlexBox3>
          </AroundBox>
        </Box>

        <CenterBox>
          <Id nickname='코드스테이츠'></Id>
          <Id nickname='님의 작성글'></Id>
        </CenterBox>
      </Wrap>

      <Wrap>
        
      <PostBlock>
          <BorderBox>
            <BetweenBox>
              <FlexBox>
                <ProfilePicture img={user} />
                <Id nickname='손흥민'></Id>
              </FlexBox>
              <ContentButton onClick={() => {setContentMenu(true)}} />
            </BetweenBox>
          </BorderBox>
          
          <BorderBox>
            <ContentPicture img={pic1} />
          </BorderBox>

          <Box>
            <FlexBox>
              <LikeButton />
              <LikeButton img={liked} />
              <CommentButton />
            </FlexBox>
            <BetweenBox>
              <FlexBox>
                <LikeCounts count='0' />
                <CommentCounts count='0' />
              </FlexBox>
              <ContentTime time='2022-06-10 20:40:08' />
            </BetweenBox>
          </Box>

          <Box>
            <ContentText text='텍스트가 들어갈 자리입니다' />
          </Box>
          
          <CommentBlock>
            <BetweenBox>
              <FlexBox>
                <ProfilePicture img={user} />
                <Id nickname='helloworld123' />
              </FlexBox>
              <CommentMenu onClick={() => setCommentMenu(true)} />
            </BetweenBox>
            <FlexBox>
              <Comment text='댓글이 들어갈 자리입니다'  time='2022-06-13 20:40:08'/>
            </FlexBox>
          </CommentBlock>
            
          <BorderBox>
            <CommentInput />
            <CommentSubmit />
          </BorderBox>
        </PostBlock>

      </Wrap>
    </Fragment>
  )
}

export default Mypage