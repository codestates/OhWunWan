import styled from "styled-components";
import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import STYLE from "../../config";
import { header } from "../../Ducks/Slice/HeaderSlice";
import axios from "axios";

// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";

// 더미 사진
import user from "../Picture/HeaderButton/user.png"
import liked from "../Picture/LikeButton/liked.png"

// Atoms
import ProfilePicture from "../Atoms/ProfilePicture"
import Id from "../Atoms/Id";
import LikeButton from "../Atoms/LikeButton";
import CommentButton from "../Atoms/CommentButton";
import LikeCounts from "../Atoms/LikeCounts"
import CommentCounts from "../Atoms/CommentCounts"
import ContentTime from "../Atoms/ContentTime";
import ContentText from "../Atoms/ContentText"
import Comment from "../Atoms/Comment"
import CommentInput from "../Atoms/CommentInput"
import CommentSubmit from "../Atoms/CommentSubmit";
import CommentMenu from "../Atoms/CommentMenu";
import ContentButton from "../Atoms/ContentButton";
import ContentMoreButton from "../Atoms/ContentMoreButton";
import ContentVideo from "../Atoms/ContentVideo";
import LikedButton from "../Atoms/LikedButton";


// Organism
import ContentModal from "../Organism/ContentModal"
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

const CommentSelect = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid #2DA44E;
`

function Feedback() {
  // 메뉴 열고 닫기
  const [contentMenu, setContentMenu] = useState(false)
  const [commentMenu, setCommentMenu] = useState(false)
  
  // 게시물의 id를 가져오기 위한 상태관리
  const [postInfo, setPostInfo] = useState('')
  // 댓글의 id를 가져오기 위한 상태관리
  const [commentInfo, setCommentInfo] = useState('')

  // 게시물의 id를 끌어올려 전달해주는 핸들러 
  const postInfoHandler = (value) => {
    setPostInfo(value)
  }
  //console.log(postInfo)

  const commentInfoHandler = (value) => {
    setCommentInfo(value)
  }


  // get 정보 // info로 map 함수 실행
  const [info, setInfo] = useState([])

  // 요청시 parameter로 들어가는 숫자
  const [params, setParams] = useState(0)
  

  // 리덕스에서 가져온 유저 정보
  const user_info = useSelector((state)=>state.auth.user_info)
  // 현재 페이지
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(header({header: 'feedback'}))

    // 초기 정보 받기
    axios({
      method: 'get',
      url: `${STYLE.SERVER}/post/feedback/${params}`
    })
    .then(res => {
      setInfo([res.data.data])
    })
  }, [])

  useEffect(() => {
    // Read-More 버튼 클릭시 정보 추가로 받기
    axios({
      method: 'get',
      url: `${STYLE.SERVER}/post/feedback/${params}`
    })
    .then(res => {
      setInfo([...info, res.data.data])
    })
  }, [params])

  // state 값 가져오기
  let select = useSelector(state => state)

  // console.log(info)

  return(
    <Fragment>
      <Wrap>
        {/* 메뉴 열고 닫기 */}
        {contentMenu ? <ContentModal setContentMenu={setContentMenu} category={"feedback"} postInfo={postInfo}/> : null}
        {commentMenu ? <CommentModal setCommentMenu={setCommentMenu} category={"feedback"} commentInfo={commentInfo}/> : null}

        <HeaderBlock />
        <MarginBox />

        {!info.length ? <p>로딩중</p> : 
          info.map((arr, index) => {
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
                            {post["User.nickname"]===user_info.nickname ?<ContentButton onClick={() => {setContentMenu(true);postInfoHandler(post);}}/>:''}
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
                                      {post.comment[index3]["User.nickname"]===user_info.nickname? <CommentMenu onClick={() => {setCommentMenu(true);commentInfoHandler(post.comment[index3])}} />:''}
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
                                      {post["User.nickname"]===user_info.nickname? <CommentMenu onClick={() => {setCommentMenu(true);commentInfoHandler(post.comment[index3]);console.log(post["User.nickname"])}} /> 
                                      : post.comment[index3]["User.nickname"]===user_info.nickname? <CommentMenu onClick={() => {setCommentMenu(true);commentInfoHandler(post.comment[index3])}} />:''}
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
        }

        <ContentMoreButton onClick={() => {
          setParams(params + 1)
        }} />
      </Wrap>
    </Fragment>
  )
}

export default Feedback