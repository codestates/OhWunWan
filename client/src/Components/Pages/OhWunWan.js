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
import pic1 from "../Picture/ContentPicture/pic1.webp"

// Atoms
import ProfilePicture from "../Atoms/ProfilePicture"
import Id from "../Atoms/Id";
import ContentPicture from "../Atoms/ContentPicture";
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
import LikedButton from "../Atoms/LikedButton";

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

function OhWunWan() {
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



  // get 정보 // info[0]으로 map 함수 실행
  const [info, setInfo] = useState([])
  // 요청시 parameter로 들어가는 숫자
  const [params, setParams] = useState(0)

  // 리덕스에 저장된 유저정보 가져오기
  const user_info = useSelector((state)=>state.auth.user_info)
  // 현재 페이지
  const dispatch = useDispatch()

  useEffect(() => {
    // 게시판 테두리 변경
    dispatch(header({header: 'ohwunwan'}));
    
    // 초기 정보 받기
    axios({
      method: 'get',
      url: `${STYLE.SERVER}/post/ohwunwan/${params}`
    })
    .then(res => {
      //console.log(res.data.data)
      setInfo([res.data.data])
    })
  }, [])
  
  useEffect(() => {
    // Read-More 버튼 클릭시 정보 추가로 받기
    axios({
      method: 'get',
      url: `${STYLE.SERVER}/post/ohwunwan/${params}`
    })
    .then(res => {
      // console.log(res.data.data)
      setInfo([...info, res.data.data])
    })
  }, [params])

  // state 값 가져오기
  let select = useSelector(state => state)
  
  // 유저 아이디 값
  // console.log(select.auth.user_info.id)

  // console.log(info)

  return(
    <Fragment>
      <Wrap>
        {/* 메뉴 열고 닫기 */}
        {contentMenu ? <ContentModal setContentMenu={setContentMenu} category={"ohwunwan"} postInfo={postInfo}/> : null}
        {commentMenu ? <CommentModal setCommentMenu={setCommentMenu} category={"ohwunwan"} commentInfo={commentInfo}/> : null}
        
        <HeaderBlock/>
        <MarginBox />

        {!info.length ? <p>로딩중</p> : 
          info.map((arr, index) => {
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
                            {post["User.nickname"]===user_info.nickname ?<ContentButton onClick={() => {setContentMenu(true);postInfoHandler(post)}}/>:''}
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
                              <LikeCounts count={Object.keys(post.like).length} />
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
                                  {post.comment[index]["User.nickname"]===user_info.nickname? <CommentMenu onClick={() => {setCommentMenu(true);commentInfoHandler(post.comment[index])}} />:''}
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
        }

        <ContentMoreButton onClick={() => {
          setParams(params + 1)
          console.log(params)
        }} />

      </Wrap>
    </Fragment>
  )
}

export default OhWunWan