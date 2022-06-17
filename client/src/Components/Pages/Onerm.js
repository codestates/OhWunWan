import styled from "styled-components";
import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import STYLE from "../../config";
import { header } from "../../Ducks/Slice/HeaderSlice";
import axios from "axios";

// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";

// Atoms
import OnermCategory from "../Atoms/OnermCategory";
import ProfilePicture from "../Atoms/ProfilePicture"
import Id from "../Atoms/Id";
import CommentButton from "../Atoms/CommentButton";
import CommentCounts from "../Atoms/CommentCounts"
import ContentTime from "../Atoms/ContentTime";
import ContentText from "../Atoms/ContentText"
import Comment from "../Atoms/Comment"
import CommentInput from "../Atoms/CommentInput"
import CommentSubmit from "../Atoms/CommentSubmit";
import CommentMenu from "../Atoms/CommentMenu";
import ContentButton from "../Atoms/ContentButton";
import RespectButton from "../Atoms/RespectButton";
import RespectCounts from "../Atoms/RespectCounts";
import OnermLogo from "../Atoms/OnermLogo";
import OnermRank from "../Atoms/OnermRank";
import OnermRecord from "../Atoms/OnermRecord";
import ContentMoreButton from "../Atoms/ContentMoreButton";
import ContentVideo from "../Atoms/ContentVideo";
import RespectedButton from "../Atoms/RespectedButton";

// Organism
import ContentModal from "../Organism/ContentModal";
import CommentModal from "../Organism/CommentModal";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const PostBlock = styled.div`
  margin-bottom: 2em;
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

const BetweenBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${STYLE.WIDTH};
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`

const CommentBlock = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
`

function Onerm() {
  // 메뉴 열고 닫기
  const [contentMenu, setContentMenu] = useState(false)
  const [commentMenu, setCommentMenu] = useState(false)

  // 카테코리 - 벤치프레스, 데드리프트, 스쿼트 변경하기 위한 state
  const [select1, setSelect1] = useState(true)
  const [select2, setSelect2] = useState(false)
  const [select3, setSelect3] = useState(false)

  // get 정보 // info로 map 함수 실행
  const [info1, setInfo1] = useState([])
  const [info2, setInfo2] = useState([])
  const [info3, setInfo3] = useState([])


  // 요청시 parameter로 들어가는 숫자
  const [params1, setParams1] = useState(0)
  const [params2, setParams2] = useState(0)
  const [params3, setParams3] = useState(0)

  // 게시물의 id 가져오기 
  const [benchInfo, setBenchInfo] = useState('')
  const [deadInfo, setDeadInfo] = useState('')
  const [squatInfo, setSquatInfo] = useState('')

  let benchInfoHandler = (value) => {
    setBenchInfo(value)
  }
  let deadInfoHandler = (value) => {
    setDeadInfo(value)
  }
  let squatInfoHandler = (value) => {
    setSquatInfo(value)
  }

  // 댓글의 id 가져오기
  const [benchCommentInfo, setBenchCommentInfo] = useState('')
  const [deadCommentInfo, setDeadCommentInfo] = useState('')
  const [squatCommentInfo, setSquatCommentInfo] = useState('')
  
  const benchCommentInfoHandler = (value) => {
    setBenchCommentInfo(value)
  }
  
  const deadCommentInfoHandler = (value) => {
    setDeadCommentInfo(value)
  }
  
  const squatCommentInfoHandler = (value) => {
    setSquatCommentInfo(value)
  }
  
  // 리덕스에서 가져온 유저 정보
  const user_info = useSelector((state)=>state.auth.user_info)
  // 현재 페이지
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(header({header: '1rm'}))
  }, [])
  

  // state를 이용해 선택된 종목을 반환하는 함수
  const categorySelector = (select1,select2,select3) => {
    if(select1){
      return "bench_1rm"
    }

    if(select2){
      return "dead_1rm"
    }

    if(select3){
      return "squat_1rm"
    }
  }

  // 페이지 전환시 초기값(벤치프레스)
  useEffect(() => {
    setInfo1([])
    setParams1(0)
  }, [select1])

  // 페이지 전환시 초기값(데드리프트)
  useEffect(() => {
    setInfo2([])
    setParams2(0)
  }, [select2])

  // 페이지 전환시 초기값(스쿼트)
  useEffect(() => {
    setInfo3([])
    setParams3(0)
  }, [select3])

  // Read-More 버튼 추가 정보(벤치프레스)
  useEffect(() => {
    axios({
      method: 'get',
      url: `${STYLE.SERVER}/post/bench_1rm/${params1}`
    })
    .then(res => {
      setInfo1([...info1, res.data.data])
    })
  }, [params1])

  // Read-More 버튼 추가 정보(데드리프트)
  useEffect(() => {
    axios({
      method: 'get',
      url: `${STYLE.SERVER}/post/dead_1rm/${params2}`
    })
    .then(res => {
      setInfo2([...info2, res.data.data])
    })
  }, [params2])

  // Read-More 버튼 추가 정보(스쿼트)
  useEffect(() => {
    axios({
      method: 'get',
      url: `${STYLE.SERVER}/post/squat_1rm/${params3}`
    })
    .then(res => {
      setInfo3([...info3, res.data.data])
    })
  }, [params3])

  // state 값 가져오기
  let select = useSelector(state => state)

  // console.log('벤치프레스', info1, params1)
  //console.log('벤치프레스', info1, params1)
  // console.log('데드리프트', info2, params2)
  // console.log('스쿼트', info3, params3)
  // console.log('-----------------')

  return(
    <Fragment>
      <Wrap>
        {/* 메뉴 열고 닫기 */}
        {contentMenu ? <ContentModal setContentMenu={setContentMenu} category={categorySelector(select1,select2,select3)} postInfo={benchInfo? benchInfo : deadInfo? deadInfo : squatInfo? squatInfo:''}/> : null}
        {commentMenu ? <CommentModal setCommentMenu={setCommentMenu} category={categorySelector(select1,select2,select3)} commentInfo={benchCommentInfo? benchCommentInfo : deadCommentInfo? deadCommentInfo : squatCommentInfo? squatCommentInfo:'' }/> : null}

        <HeaderBlock />
        <MarginBox />

        <Box>
          <BetweenBox>
            {/* 벤치프레스 버튼 누를 때 */}
            <OnermCategory subject='벤치프레스' select={select1 ? 'select' : 'none'} 
              onClick={() => {
                if(select1) {
                } else {
                  setSelect1(true);
                  setSelect2(false);
                  setSelect3(false);
                  // 초기값 데이터 변경을 위한 셋팅
                  setParams1(1)
                }
              }}
            />

            {/* 데드리프트 버튼 누를 때 */}
            <OnermCategory subject='데드리프트' select={select2 ? 'select' : 'none'} 
              onClick={() => {
                if(select2) {
                } else {
                  setSelect1(false);
                  setSelect2(true);
                  setSelect3(false);
                  // 초기값 데이터 변경을 위한 셋팅
                  setParams2(1)
                }
              }}
            />

            {/* 스쿼트 버튼 누를 때 */}
            <OnermCategory subject='스쿼트' select={select3 ? 'select' : 'none'} 
              onClick={() => {
                if(select3) {
                } else {
                  setSelect1(false);
                  setSelect2(false);
                  setSelect3(true);
                  // 초기값 데이터 변경을 위한 셋팅
                  setParams3(1)
                }
              }}
            />
          </BetweenBox>
        </Box>
        
        {/* 벤치프레스 map */}
        {select1 ? (!info1.length ? <p>로딩중</p> : 
          info1.map((arr, index1) => {
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
                              {/* <ContentButton onClick={() => {setContentMenu(true)}} />
                              <OnermRank count='12' />/<OnermRank count='28' /> */}
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
                              {post.rank.length !== 0 ? <OnermRank count={`${post.rank[0]['Dead_1rm.ranking']}/`} /> : null}
                              {post.rank.length !== 0 ? <OnermRank count={post.rank[1]} /> : null}
                              {/* <ContentButton onClick={() => {setContentMenu(true)}} />
                              <OnermRank count='12' />/<OnermRank count='28' /> */}
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
                              {post.rank.length !== 0 ? <OnermRank count={`${post.rank[0]['Squat_1rm.ranking']}/`} /> : null}
                              {post.rank.length !== 0 ? <OnermRank count={post.rank[1]} /> : null}
                              {/* <ContentButton onClick={() => {setContentMenu(true)}} />
                              <OnermRank count='12' />/<OnermRank count='28' /> */}
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

        {/* 벤치프레스 more 버튼 */}
        {select1 ? <ContentMoreButton onClick={() => {
          setParams1(params1 + 1)
        }} /> : null}

        {/* 데드리프트 more 버튼 */}
        {select2 ? <ContentMoreButton onClick={() => {
          setParams2(params2 + 1)
        }} /> : null}

        {/* 스쿼트 more 버튼 */}
        {select3 ? <ContentMoreButton onClick={() => {
          setParams3(params3 + 1)
        }} /> : null}
      </Wrap>
    </Fragment>
  )
}

export default Onerm