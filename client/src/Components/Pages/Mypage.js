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
import MypageCafegory from "../Atoms/MypageCafegory";

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

  // 카테코리 - 오운완, 벤치프레스, 데드리프트, 스쿼트, 피드백 변경하기 위한 state
  const [select1, setSelect1] = useState(true)
  const [select2, setSelect2] = useState(false)
  const [select3, setSelect3] = useState(false)
  const [select4, setSelect4] = useState(false)
  const [select5, setSelect5] = useState(false)

  // 정보
  const [mypage_info, setMypage_info] = useState([])

  // 현재 페이지
  let select = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(header({header: 'mypage'}))
  }, [])
  
  //로그아웃 핸들러 
  const logoutHandler = () => {
    axios.post(`${STYLE.SERVER}/auth/logout`)
    .then((res)=>{dispatch(logout_modal(false));window.location.replace(`${STYLE.CLIENT}/`)})
  }

  // 페이지 렌더링 시 초기 데이터 받기(유저정보, 기록)
  useEffect(() => {
    axios.get(`${STYLE.SERVER}/user/${select.auth.user_info.id}`)
    .then((req) => {
      setMypage_info([req.data.data])
    })
  }, [])

  console.log(mypage_info)

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
          {mypage_info.length ? <MypagePicture img={mypage_info[0].user_info.profile_picture} /> : <MypagePicture img={user} /> }
          <FlexBox2>
            {mypage_info.length ? <MypageId nickname={mypage_info[0].user_info.nickname} /> : <MypageId /> }
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
              {mypage_info.length ? <RecordRank record={mypage_info[0].bench_rank[0]["Bench_1rm.ranking"]} /> : <RecordRank record='0' />}
              {mypage_info.length ? <RecordTotal record={mypage_info[0].bench_rank[1]} /> : <RecordTotal record='0' />}
            </FlexBox3>
            <FlexBox3>
              {mypage_info.length ? <RecordRank record={mypage_info[0].dead_rank[0]["Dead_1rm.ranking"]} /> : <RecordRank record='0' />}
              {mypage_info.length ? <RecordTotal record={mypage_info[0].dead_rank[1]} /> : <RecordTotal record='0' />}
            </FlexBox3>
            <FlexBox3>
              {mypage_info.length ? <RecordRank record={mypage_info[0].squat_rank[0]["Squat_1rm.ranking"]} /> : <RecordRank record='0' />}
              {mypage_info.length ? <RecordTotal record={mypage_info[0].squat_rank[1]} /> : <RecordTotal record='0' />}
            </FlexBox3>
          </AroundBox>
          <AroundBox>
            <FlexBox3>
              {mypage_info.length ? <RecordWeight record={mypage_info[0].bench_rank[0]["Bench_1rm.ranking"]} /> : <RecordWeight record='0' />}kg
            </FlexBox3>
            <FlexBox3>
              {mypage_info.length ? <RecordWeight record={mypage_info[0].dead_rank[0]["Dead_1rm.ranking"]} /> : <RecordWeight record='0' />}kg
            </FlexBox3>
            <FlexBox3>
              {mypage_info.length ? <RecordWeight record={mypage_info[0].squat_rank[0]["Squat_1rm.ranking"]} /> : <RecordWeight record='0' />}kg
            </FlexBox3>
          </AroundBox>
        </Box>

        <CenterBox>
          {mypage_info.length ? <Id nickname={mypage_info[0].user_info.nickname}></Id> : <Id nickname='코드스테이츠'></Id>}
          <Id nickname='님의 작성글'></Id>
        </CenterBox>

        <Box>
          <BetweenBox>
            {/* 오운완 버튼 누를 때 */}
            <MypageCafegory subject='오운완' select={select1 ? 'select' : 'none'}
              onClick={() => {
                if(select1) {
                } else {
                  setSelect1(true);
                  setSelect2(false);
                  setSelect3(false);
                  setSelect4(false);
                  setSelect5(false);
                }
              }}
            />

            {/* 벤치프레스 버튼 누를 때 */}
            <MypageCafegory subject='벤치프레스' select={select2 ? 'select' : 'none'}
              onClick={() => {
                if(select2) {
                } else {
                  setSelect1(false);
                  setSelect2(true);
                  setSelect3(false);
                  setSelect4(false);
                  setSelect5(false);
                }
              }}
            />

            {/* 데드리프트 버튼 누를 때 */}
            <MypageCafegory subject='데드리프트' select={select3 ? 'select' : 'none'}
              onClick={() => {
                if(select3) {
                } else {
                  setSelect1(false);
                  setSelect2(false);
                  setSelect3(true);
                  setSelect4(false);
                  setSelect5(false);
                }
              }}
            />

            {/* 스쿼트 버튼 누를 때 */}
            <MypageCafegory subject='스쿼트' select={select4 ? 'select' : 'none'}
              onClick={() => {
                if(select4) {
                } else {
                  setSelect1(false);
                  setSelect2(false);
                  setSelect3(false);
                  setSelect4(true);
                  setSelect5(false);
                }
              }}
            />

            {/* 피드백 버튼 누를 때 */}
            <MypageCafegory subject='피드백' select={select5 ? 'select' : 'none'}
              onClick={() => {
                if(select5) {
                } else {
                  setSelect1(false);
                  setSelect2(false);
                  setSelect3(false);
                  setSelect4(false);
                  setSelect5(true);
                }
              }}
            />
          </BetweenBox>
        </Box>

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