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
import ContentMoreButton from "../Atoms/ContentMoreButton";
import LikedButton from "../Atoms/LikedButton";
import OnermLogo from "../Atoms/OnermLogo";
import OnermRank from "../Atoms/OnermRank";
import ContentVideo from "../Atoms/ContentVideo";
import RespectButton from "../Atoms/RespectButton";
import RespectedButton from "../Atoms/RespectedButton";
import OnermRecord from "../Atoms/OnermRecord";
import RespectCounts from "../Atoms/RespectCounts";

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

const CommentSelect = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid #2DA44E;
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

  // contentMenu에 선택 카테고리를 내려주는 함수

  const categorySelector = (select1,select2,select3,select4,select5) => {
    if(select1){
      return "ohwunwan"
    }
    if(select2){
      return "bench_1rm"
    }

    if(select3){
      return "dead_1rm"
    }

    if(select4){
      return "squat_1rm"
    }
    
    if(select5){
      return "feedback"
    }
  }

  // get 정보 // info로 map 함수 실행
  const [info1, setInfo1] = useState([])
  const [info2, setInfo2] = useState([])
  const [info3, setInfo3] = useState([])
  const [info4, setInfo4] = useState([])
  const [info5, setInfo5] = useState([])

  // 요청시 parameter로 들어가는 숫자
  const [params1, setParams1] = useState(0)
  const [params2, setParams2] = useState(0)
  const [params3, setParams3] = useState(0)
  const [params4, setParams4] = useState(0)
  const [params5, setParams5] = useState(0)

  // 정보
  const [mypage_info, setMypage_info] = useState([])

// 게시물의 id 가져오기
const [ohwunwanInfo, setOhwunwanInfo] =useState('') 
const [benchInfo, setBenchInfo] = useState('')
const [deadInfo, setDeadInfo] = useState('')
const [squatInfo, setSquatInfo] = useState('')
const [feedbackInfo, setFeedbackInfo] = useState('')

const ohwunwanInfoHandler = (value) => {
  setOhwunwanInfo(value)
}

const benchInfoHandler = (value) => {
  setBenchInfo(value)
}
const deadInfoHandler = (value) => {
  setDeadInfo(value)
}
const squatInfoHandler = (value) => {
  setSquatInfo(value)
}

const feedbackInfoHandler = (value) => {
  setFeedbackInfo(value)
}

// 댓글의 id 가져오기
const [ohwunwanCommentInfo, setOhwuwnwnaCommentInfo] = useState('')
const [benchCommentInfo, setBenchCommentInfo] = useState('')
const [deadCommentInfo, setDeadCommentInfo] = useState('')
const [squatCommentInfo, setSquatCommentInfo] = useState('')
const [feedbackCommentInfo, setFeedbackCommentInfo] = useState('')

const ohwunwanCommentInfoHandler = (value) => {
  setOhwuwnwnaCommentInfo(value)
}

const benchCommentInfoHandler = (value) => {
  setBenchCommentInfo(value)
}

const deadCommentInfoHandler = (value) => {
  setDeadCommentInfo(value)
}

const squatCommentInfoHandler = (value) => {
  setSquatCommentInfo(value)
}

const feedbackCommentInfoHandler = (value) => {
  setFeedbackCommentInfo(value)
}
  
  // 리덕스에서 유저 정보 가져오기  
  const user_info = useSelector((state)=>state.auth.user_info)
  // console.log(user_info)
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

  // 페이지 전환시 초기값(오운완)
  useEffect(() => {
    setInfo1([])
    setParams1(0)
  }, [select1])

  // 페이지 전환시 초기값(벤치프레스)
  useEffect(() => {
    setInfo2([])
    setParams2(0)
  }, [select2])

  // 페이지 전환시 초기값(데드리프트)
  useEffect(() => {
    setInfo3([])
    setParams3(0)
  }, [select3])

  // 페이지 전환시 초기값(스쿼트)
  useEffect(() => {
    setInfo4([])
    setParams4(0)
  }, [select4])

  // 페이지 전환시 초기값(피드백)
  useEffect(() => {
    setInfo5([])
    setParams5(0)
  }, [select5])

  // Read-More 버튼 추가 정보(오운완)
  useEffect(() => {
    axios({
      method: 'get',
      url: `${STYLE.SERVER}/user/ohwunwan/${select.auth.user_info.id}/${params1}`
      // url: `${STYLE.SERVER}/user/ohwunwan/${mypage_info[0].user_info.id}/${params1}`
    })
    .then(res => {
      setInfo1([...info1, res.data.data])
    })
  }, [params1])

  // Read-More 버튼 추가 정보(벤치프레스)
  useEffect(() => {
    axios({
      method: 'get',
      url: `${STYLE.SERVER}/user/bench_1rm/${select.auth.user_info.id}/${params2}`
      // url: `${STYLE.SERVER}/user/bench_1rm/${mypage_info[0].user_info.id}/${params2}`
    })
    .then(res => {
      setInfo2([...info2, res.data.data])
    })
  }, [params2])

  // Read-More 버튼 추가 정보(데드리프트)
  useEffect(() => {
    axios({
      method: 'get',
      url: `${STYLE.SERVER}/user/dead_1rm/${select.auth.user_info.id}/${params3}`
      // url: `${STYLE.SERVER}/user/dead_1rm/${mypage_info[0].user_info.id}/${params3}`
    })
    .then(res => {
      setInfo3([...info3, res.data.data])
    })
  }, [params3])

  // Read-More 버튼 추가 정보(스쿼트)
  useEffect(() => {
    axios({
      method: 'get',
      url: `${STYLE.SERVER}/user/squat_1rm/${select.auth.user_info.id}/${params4}`
      // url: `${STYLE.SERVER}/user/squat_1rm/${mypage_info[0].user_info.id}/${params4}`
    })
    .then(res => {
      setInfo4([...info4, res.data.data])
    })
  }, [params4])

  // Read-More 버튼 추가 정보(피드백)
  useEffect(() => {
    axios({
      method: 'get',
      url: `${STYLE.SERVER}/user/feedback/${select.auth.user_info.id}/${params5}`
      // url: `${STYLE.SERVER}/user/feedback/${mypage_info[0].user_info.id}/${params5}`
    })
    .then(res => {
      setInfo5([...info5, res.data.data])
    })
  }, [params5])

  // console.log(mypage_info)
  // console.log(info1)
  // console.log(params1)

  return(
    <Fragment>
      <Wrap>
        {/* 로그아웃 모달 */}
        {select.logout_modal.logout_modal ? <LogoutModal logoutHandler={logoutHandler}/> : null}

        {/* 메뉴 열고 닫기 */}
        {contentMenu ? <ContentModal setContentMenu={setContentMenu} category={categorySelector(select1,select2,select3,select4,select5)} postInfo={ohwunwanInfo? ohwunwanInfo :benchInfo? benchInfo : deadInfo? deadInfo : squatInfo? squatInfo:feedbackInfo ? feedbackInfo:''}/> : null}
        {commentMenu ? <CommentModal setCommentMenu={setCommentMenu} category={categorySelector(select1,select2,select3,select4,select5)} commentInfo ={ohwunwanCommentInfo? ohwunwanCommentInfo: benchCommentInfo? benchCommentInfo : deadCommentInfo ? deadCommentInfo: squatCommentInfo? squatCommentInfo: feedbackCommentInfo? feedbackCommentInfo:''}/> : null}
        
        <HeaderBlock />
        <MarginBox />

        <BorderBox>
          {mypage_info.length ? <MypagePicture img={mypage_info[0].user_info.profile_picture} /> : <MypagePicture img={user} /> }
          <FlexBox2>
            {mypage_info.length ? <MypageId nickname={mypage_info[0].user_info.nickname} /> : <MypageId /> }
          {/* <MypagePicture img={user_info.profile_picture}/>
          <FlexBox2>
            <MypageId nickname={user_info.nickname} /> */}
            <Link to='/userinfo'>
              <MypageButton text='회원정보수정' />
            </Link>
          </FlexBox2>
        </BorderBox>

        <Box>
          <AroundBox>
            <RecordSubject subject='벤치프레스' />
            <RecordSubject subject='데드리프트' />
            <RecordSubject subject='스쿼트' />
          </AroundBox>
          <AroundBox>
            <FlexBox3>
              {mypage_info.length ? (mypage_info[0].bench_rank[0][0] ? <RecordRank record={mypage_info[0].bench_rank[0][0]["Bench_1rm.ranking"]} /> : <RecordRank record='0' />) : <RecordRank record='0' />}
              {mypage_info.length ? <RecordTotal record={mypage_info[0].bench_rank[1]} /> : <RecordTotal record='0' />}
            </FlexBox3>
            <FlexBox3>
              {mypage_info.length ? (mypage_info[0].dead_rank[0][0] ? <RecordRank record={mypage_info[0].dead_rank[0][0]["Dead_1rm.ranking"]} /> : <RecordRank record='0' />) : <RecordRank record='0' />}
              {mypage_info.length ? <RecordTotal record={mypage_info[0].dead_rank[1]} /> : <RecordTotal record='0' />}
            </FlexBox3>
            <FlexBox3>
              {mypage_info.length ? (mypage_info[0].squat_rank[0][0] ? <RecordRank record={mypage_info[0].bench_rank[0][0]["Squat_1rm.ranking"]} /> : <RecordRank record='0' />) : <RecordRank record='0' />}
              {mypage_info.length ? <RecordTotal record={mypage_info[0].squat_rank[1]} /> : <RecordTotal record='0' />}
            </FlexBox3>
          </AroundBox>
          <AroundBox>
            <FlexBox3>
              {mypage_info.length ? (mypage_info[0].bench_rank[0][0] ? <RecordWeight record={mypage_info[0].bench_rank[0][0]["Bench_1rm.kg"]} /> : <RecordWeight record='0' />) : <RecordRank record='0' />}kg
            </FlexBox3>
            <FlexBox3>
              {mypage_info.length ? (mypage_info[0].dead_rank[0][0] ? <RecordWeight record={mypage_info[0].dead_rank[0][0]["Dead_1rm.kg"]} /> : <RecordWeight record='0' />) : <RecordRank record='0' />}kg
            </FlexBox3>
            <FlexBox3>
              {mypage_info.length ? (mypage_info[0].bench_rank[0][0] ? <RecordWeight record={mypage_info[0].bench_rank[0][0]["Squat_1rm.kg"]} /> : <RecordWeight record='0' />) : <RecordRank record='0' />}kg
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

                  // 초기값 데이터 변경을 위한 셋팅
                  setParams1(1)
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

                  // 초기값 데이터 변경을 위한 셋팅
                  setParams2(1)
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

                  // 초기값 데이터 변경을 위한 셋팅
                  setParams3(1)
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

                  // 초기값 데이터 변경을 위한 셋팅
                  setParams4(1)
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

                  // 초기값 데이터 변경을 위한 셋팅
                  setParams5(1)
                }
              }}
            />
          </BetweenBox>
        </Box>
      </Wrap>

      <Wrap>

      {/* 오운완 map */}
      {select1 ? (!info1.length ? <p>로딩중</p> : 
          info1.map((arr, index) => {
            return(
              <div key={index}>
                {arr.length === 0 ? null : (
                  arr.map((post, index) => {
                    return(
                      <PostBlock key={index}>
                        <BorderBox>
                          <BetweenBox>
                            <FlexBox>
                              <ProfilePicture img={post["User.profile_picture"]} />
                              <Id nickname={post["User.nickname"]}></Id>
                            </FlexBox>
                            {post["User.nickname"]===user_info.nickname? <ContentButton onClick={() => {setContentMenu(true);ohwunwanInfoHandler(post)}} />: ''}
                          </BetweenBox>
                        </BorderBox>
                        
                        <BorderBox>
                          <ContentPicture img={post.picture} />
                        </BorderBox>

                        <Box>
                          <FlexBox>
                            {/* 좋아요 버튼 */}
                            {post.like.length === 0 ? <LikeButton post_id={post.id} where='ohwunwan'/> : (
                              (post.like.map((like) => {
                                if(like.user_id === select.auth.user_info.id) {
                                  return(1)
                                } 
                              })).indexOf(1) !== -1 ?
                              post.like.map((like) => {
                                if(like.user_id === select.auth.user_info.id) {
                                  return(
                                    <LikedButton key={index} post_id={post.id} where='ohwunwan' like_id={like.id}/>
                                  )
                                } 
                              })
                              : <LikeButton post_id={post.id} where='ohwunwan'/>
                            )}
                            
                            <CommentButton />
                          </FlexBox>
                          <BetweenBox>
                            <FlexBox>
                              <LikeCounts count={post.like.length} />
                              <CommentCounts count={post.comment.length} />
                            </FlexBox>
                            <ContentTime time={post.createdAt.slice(0, 10) + ' ' + post.createdAt.slice(11, 19)} />
                          </BetweenBox>
                        </Box>

                        <Box>
                          <ContentText text={post.text_content} />
                        </Box>
                        
                        {post.comment.length === 0 ? null : (
                          post.comment.map((comment, index) => {
                            return(
                              <CommentBlock key={index}>
                                <BetweenBox>
                                  <FlexBox>
                                    <ProfilePicture img={comment['User.profile_picture']} />
                                    <Id nickname={comment['User.nickname']} />
                                  </FlexBox>
                                  {post.comment[index]["User.nickname"]===user_info.nickname? <CommentMenu onClick={() => {setCommentMenu(true);ohwunwanCommentInfoHandler(post.comment[index])}} />:''}
                                </BetweenBox>
                                <FlexBox>
                                  <Comment text={comment.text_content}  time={comment.createdAt.slice(0, 10) + ' ' + comment.createdAt.slice(11, 19)}/>
                                </FlexBox>
                              </CommentBlock>
                            )
                          })
                        )}
                          
                        <BorderBox>
                          <CommentInput />
                          <CommentSubmit post_id={post.id} where='ohwunwan' />
                        </BorderBox>
                      </PostBlock>
                    )
                  })
                )}    
            </div>
          )
        })
      ) : null}

      {/* 벤치프레스 map */}
      {select2 ? (!info2.length ? <p>로딩중</p> : 
          info2.map((arr, index1) => {
            return(
              <div key={index1}>
                {arr.length === 0 ? null : (
                  arr.map((post, index2) => {
                    return(
                      <PostBlock key={index2}>
                        <BorderBox>
                          <BetweenBox>
                            <FlexBox>
                              <ProfilePicture img={post["User.profile_picture"]} />
                              <Id nickname={post["User.nickname"]}></Id>
                            </FlexBox>
                            <FlexBox>
                              <OnermLogo />
                              {post.rank.length !== 0 ? <OnermRank count={`${post.rank[0]['Bench_1rm.ranking']}/`} /> : null}
                              {post.rank.length !== 0 ? <OnermRank count={post.rank[1]} /> : null}
                              {post["User.nickname"]===user_info.nickname? <ContentButton onClick={() => {setContentMenu(true);benchInfoHandler(post)}} />: ''}
                            </FlexBox>
                          </BetweenBox>
                        </BorderBox>
                        
                        <BorderBox>
                          <ContentVideo video={post.video} />
                        </BorderBox>

                        <Box>
                          <BetweenBox>
                            <FlexBox>

                              {/* 리스펙 버튼 */}
                              {post.respect.length === 0 ? <RespectButton post_id={post.id} where='bench'/> : (
                                (post.respect.map((respect) => {
                                  if(respect.user_id === select.auth.user_info.id) {
                                    return(1)
                                  } 
                                })).indexOf(1) !== -1 ?
                                post.respect.map((respect, idx1) => {
                                  if(respect.user_id === select.auth.user_info.id) {
                                    return(
                                      <RespectedButton key={idx1} />
                                    )
                                  } 
                                })
                                : <RespectButton post_id={post.id} where='bench'/>
                              )}
                            
                              <CommentButton />
                            </FlexBox>
                            <OnermRecord record={post.kg}  />
                          </BetweenBox>
                          <BetweenBox>
                            <FlexBox>
                              <RespectCounts count={post.respect.length} />
                              <CommentCounts count={post.comment.length} />
                            </FlexBox>
                            <ContentTime time={post.createdAt.slice(0, 10) + ' ' + post.createdAt.slice(11, 19)} />
                          </BetweenBox>
                        </Box>

                        <Box>
                          <ContentText text={post.text_content} />
                        </Box>
                        
                        {post.comment.length === 0 ? null : (
                          post.comment.map((comment, index3) => {
                            return(
                              <CommentBlock key={index3}>
                                <BetweenBox>
                                  <FlexBox>
                                    <ProfilePicture img={comment['User.profile_picture']} />
                                    <Id nickname={comment['User.nickname']} />
                                  </FlexBox>
                                  {post.comment[index3]["User.nickname"]===user_info.nickname? <CommentMenu onClick={() => {setCommentMenu(true);benchCommentInfoHandler(post.comment[index3])}} />:''}
                                </BetweenBox>
                                <FlexBox>
                                  <Comment text={comment.text_content}  time={comment.createdAt.slice(0, 10) + ' ' + comment.createdAt.slice(11, 19)}/>
                                </FlexBox>
                              </CommentBlock>
                            )
                          })
                        )}
                        
                        <BorderBox>
                          <CommentInput />
                          <CommentSubmit post_id={post.id} where='bench' />
                        </BorderBox>
                      </PostBlock>
                    )
                  })
                )}
              </div>
            )
          })
        ) : null}

        {/* 데드리프트 map */}
        {select3 ? (!info3.length ? <p>로딩중</p> : 
          info3.map((arr, index1) => {
            return(
              <div key={index1}>
                {arr.length === 0 ? null : (
                  arr.map((post, index2) => {
                    return(
                      <PostBlock key={index2}>
                        <BorderBox>
                          <BetweenBox>
                            <FlexBox>
                              <ProfilePicture img={post["User.profile_picture"]} />
                              <Id nickname={post["User.nickname"]}></Id>
                            </FlexBox>
                            <FlexBox>
                              <OnermLogo />
                              {post.rank.length !== 0 ? <OnermRank count={`${post.rank[0]['Dead_1rm.ranking']}/`} /> : null}
                              {post.rank.length !== 0 ? <OnermRank count={post.rank[1]} /> : null}
                              {post["User.nickname"]===user_info.nickname ?<ContentButton onClick={() => {setContentMenu(true);deadInfoHandler(post)}} />:''}
                            </FlexBox>
                          </BetweenBox>
                        </BorderBox>
                        
                        <BorderBox>
                          <ContentVideo video={post.video} />
                        </BorderBox>

                        <Box>
                          <BetweenBox>
                            <FlexBox>
                              
                              {/* 리스펙 버튼 */}
                              {post.respect.length === 0 ? <RespectButton post_id={post.id} where='dead'/> : (
                                (post.respect.map((respect) => {
                                  if(respect.user_id === select.auth.user_info.id) {
                                    return(1)
                                  } 
                                })).indexOf(1) !== -1 ?
                                post.respect.map((respect, idx2) => {
                                  if(respect.user_id === select.auth.user_info.id) {
                                    return(
                                      <RespectedButton key={idx2} />
                                    )
                                  } 
                                })
                                : <RespectButton post_id={post.id} where='dead'/>
                              )}

                              <CommentButton />
                            </FlexBox>
                            <OnermRecord record={post.kg}  />
                          </BetweenBox>
                          <BetweenBox>
                            <FlexBox>
                              <RespectCounts count={post.respect.length} />
                              <CommentCounts count={post.comment.length} />
                            </FlexBox>
                            <ContentTime time={post.createdAt.slice(0, 10) + ' ' + post.createdAt.slice(11, 19)} />
                          </BetweenBox>
                        </Box>

                        <Box>
                          <ContentText text={post.text_content} />
                        </Box>
                        
                        {post.comment.length === 0 ? null : (
                          post.comment.map((comment, index3) => {
                            return(
                              <CommentBlock key={index3}>
                                <BetweenBox>
                                  <FlexBox>
                                    <ProfilePicture img={comment['User.profile_picture']} />
                                    <Id nickname={comment['User.nickname']} />
                                  </FlexBox>
                                  {post.comment[index3]["User.nickname"]===user_info.nickname? <CommentMenu onClick={() => {setCommentMenu(true);deadCommentInfoHandler(post.comment[index3])}} />:''}
                                </BetweenBox>
                                <FlexBox>
                                  <Comment text={comment.text_content}  time={comment.createdAt.slice(0, 10) + ' ' + comment.createdAt.slice(11, 19)}/>
                                </FlexBox>
                              </CommentBlock>
                            )
                          })
                        )}
                        
                        <BorderBox>
                          <CommentInput />
                          <CommentSubmit post_id={post.id} where='dead' />
                        </BorderBox>
                      </PostBlock>
                    )
                  })
                )}
              </div>
            )
          })
        ) : null}

        {/* 스쿼트 map */}
        {select4 ? (!info4.length ? <p>로딩중</p> : 
          info4.map((arr, index1) => {
            return(
              <div key={index1}>
                {arr.length === 0 ? null : (
                  arr.map((post, index2) => {
                    return(
                      <PostBlock key={index2}>
                        <BorderBox>
                          <BetweenBox>
                            <FlexBox>
                              <ProfilePicture img={post["User.profile_picture"]} />
                              <Id nickname={post["User.nickname"]}></Id>
                            </FlexBox>
                            <FlexBox>
                              <OnermLogo />
                              {post.rank.length !== 0 ? <OnermRank count={`${post.rank[0]['Squat_1rm.ranking']}/`} /> : null}
                              {post.rank.length !== 0 ? <OnermRank count={post.rank[1]} /> : null}
                              {post["User.nickname"]===user_info.nickname? <ContentButton onClick={() => {setContentMenu(true);squatInfoHandler(post)}}/>:''}
                            </FlexBox>
                          </BetweenBox>
                        </BorderBox>
                        
                        <BorderBox>
                          <ContentVideo video={post.video} />
                        </BorderBox>

                        <Box>
                          <BetweenBox>
                            <FlexBox>
                              
                              {/* 리스펙 버튼 */}
                              {post.respect.length === 0 ? <RespectButton post_id={post.id} where='squat'/> : (
                                (post.respect.map((respect) => {
                                  if(respect.user_id === select.auth.user_info.id) {
                                    return(1)
                                  } 
                                })).indexOf(1) !== -1 ?
                                post.respect.map((respect, idx3) => {
                                  if(respect.user_id === select.auth.user_info.id) {
                                    return(
                                      <RespectedButton key={idx3} />
                                    )
                                  } 
                                })
                                : <RespectButton post_id={post.id} where='squat'/>
                              )}

                              <CommentButton />
                            </FlexBox>
                            <OnermRecord record={post.kg}  />
                          </BetweenBox>
                          <BetweenBox>
                            <FlexBox>
                              <RespectCounts count={post.respect.length} />
                              <CommentCounts count={post.comment.length} />
                            </FlexBox>
                            <ContentTime time={post.createdAt.slice(0, 10) + ' ' + post.createdAt.slice(11, 19)} />
                          </BetweenBox>
                        </Box>

                        <Box>
                          <ContentText text={post.text_content} />
                        </Box>
                        
                        {post.comment.length === 0 ? null : (
                          post.comment.map((comment, index3) => {
                            return(
                              <CommentBlock key={index3}>
                                <BetweenBox>
                                  <FlexBox>
                                    <ProfilePicture img={comment['User.profile_picture']} />
                                    <Id nickname={comment['User.nickname']} />
                                  </FlexBox>
                                  {post.comment[index3]["User.nickname"]===user_info.nickname? <CommentMenu onClick={() => {setCommentMenu(true);squatCommentInfoHandler(post.comment[index3])}} />:''}
                                </BetweenBox>
                                <FlexBox>
                                  <Comment text={comment.text_content}  time={comment.createdAt.slice(0, 10) + ' ' + comment.createdAt.slice(11, 19)}/>
                                </FlexBox>
                              </CommentBlock>
                            )
                          })
                        )}
                        
                        <BorderBox>
                          <CommentInput />
                          <CommentSubmit post_id={post.id} where='squat' />
                        </BorderBox>
                      </PostBlock>
                    )
                  })
                )}
              </div>
            )
          })
        ) : null}
        
        {/* 피드백 map */}
        {select5 ? (!info5.length ? <p>로딩중</p> : 
          info5.map((arr, index) => {
            return(
              <div key={index}>
                {arr.length === 0 ? null : (
                  arr.map((post, index2) => {
                    return(
                      <PostBlock key={index2}>
                        <BorderBox>
                          <BetweenBox>
                            <FlexBox>
                              <ProfilePicture img={post["User.profile_picture"]} />
                              <Id nickname={post["User.nickname"]}></Id>
                            </FlexBox>
                            {post["User.nickname"]===user_info.nickname? <ContentButton onClick={() => {setContentMenu(true);feedbackInfoHandler(post)}}/>:''}
                          </BetweenBox>
                        </BorderBox>
                        
                        <BorderBox>
                          <ContentVideo video={post.video} />
                        </BorderBox>

                        <Box>
                          <FlexBox>
                            {/* 좋아요 버튼 */}
                            {post.like.length === 0 ? <LikeButton post_id={post.id} where='feedback'/> : (
                              (post.like.map((like) => {
                                if(like.user_id === select.auth.user_info.id) {
                                  return(1)
                                } 
                              })).indexOf(1) !== -1 ?
                              post.like.map((like) => {
                                if(like.user_id === select.auth.user_info.id) {
                                  return(
                                    <LikedButton key={index} post_id={post.id} where='feedback' like_id={like.id}/>
                                  )
                                } 
                              })
                              : <LikeButton post_id={post.id} where='feedback'/>
                            )}
                            <CommentButton />
                          </FlexBox>
                          <BetweenBox>
                            <FlexBox>
                              <LikeCounts count={post.like.length}/>
                              <CommentCounts count={post.comment.length} />
                            </FlexBox>
                            <ContentTime time={post.createdAt.slice(0, 10) + ' ' + post.createdAt.slice(11, 19)} />
                          </BetweenBox>
                        </Box>

                        <Box>
                          <ContentText text={post.text_content} />
                        </Box>
                        
                        {post.comment.length === 0 ? null : (
                          post.comment.map((comment, index3) => {
                            return(
                              <div key={index3}>
                                {comment.selection ? (
                                  <CommentSelect>
                                    <BetweenBox>
                                      <FlexBox>
                                        <ProfilePicture img={comment['User.profile_picture']} />
                                        <Id nickname={comment['User.nickname']} />
                                      </FlexBox>
                                      {post.comment[index3]["User.nickname"]===user_info.nickname? <CommentMenu onClick={() => {setCommentMenu(true);feedbackCommentInfoHandler(post.comment[index3])}} />:''}
                                    </BetweenBox>
                                    <FlexBox>
                                    <Comment text={comment.text_content}  time={comment.createdAt.slice(0, 10) + ' ' + comment.createdAt.slice(11, 19)}/>
                                    </FlexBox>
                                  </CommentSelect>
                                ) : (
                                  <CommentBlock>
                                    <BetweenBox>
                                      <FlexBox>
                                        <ProfilePicture img={comment['User.profile_picture']} />
                                        <Id nickname={comment['User.nickname']} />
                                      </FlexBox>
                                      {post.comment[index]["User.nickname"]===user_info.nickname? <CommentMenu onClick={() => {setCommentMenu(true);feedbackCommentInfoHandler(post.comment[index])}} />:''}
                                    </BetweenBox>
                                    <FlexBox>
                                    <Comment text={comment.text_content}  time={comment.createdAt.slice(0, 10) + ' ' + comment.createdAt.slice(11, 19)}/>
                                    </FlexBox>
                                  </CommentBlock>
                                )}
                              </div>  
                            )
                          })
                        )}
                      
                        <BorderBox>
                          <CommentInput />
                          <CommentSubmit post_id={post.id} where='feedback' />
                        </BorderBox>
                      </PostBlock>
                      
                    ) 
                  })
                )}
              </div>
            )
          })
        ) : null}

      {/* 오운완 more 버튼 */}
      {select1 ? <ContentMoreButton onClick={() => {
        setParams1(params1 + 1)
      }} /> : null}

      {/* 벤치프레스 more 버튼 */}
      {select2 ? <ContentMoreButton onClick={() => {
        setParams2(params2 + 1)
      }} /> : null}

      {/* 데드리프트 more 버튼 */}
      {select3 ? <ContentMoreButton onClick={() => {
        setParams3(params3 + 1)
      }} /> : null}

      {/* 스쿼트 more 버튼 */}
      {select4 ? <ContentMoreButton onClick={() => {
        setParams4(params4 + 1)
      }} /> : null}

      {/* 피드백 more 버튼 */}
      {select5 ? <ContentMoreButton onClick={() => {
        setParams5(params5 + 1)
      }} /> : null}
      </Wrap>
    </Fragment>
  )
}

export default Mypage