import styled from "styled-components";
import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import STYLE from "../../config";
import { header } from "../../Ducks/Slice/HeaderSlice";

// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";

// 더미 사진
import user from "../Picture/HeaderButton/user.png"
import liked from "../Picture/LikeButton/liked.png"
import pic1 from "../Picture/ContentPicture/pic1.webp"

// Atoms
import FeedbackCategory from "../Atoms/FeedbackCategory"
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

// Organism
import FeedbackModal from "../Organism/FeedbackModal";
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

function Feedback() {
  // 메뉴 열고 닫기
  const [contentMenu, setContentMenu] = useState(false)
  const [commentMenu, setCommentMenu] = useState(false)

  // 카테코리 - 전체 게시물, 미채택 게시물, 채택 게시물 변경하기 위한 state
  const [select1, setSelect1] = useState(true)
  const [select2, setSelect2] = useState(false)
  const [select3, setSelect3] = useState(false)

  // 현재 페이지
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(header({header: 'feedback'}))
  }, [])

  return(
    <Fragment>
      <Wrap>
        {/* 메뉴 열고 닫기 */}
        {contentMenu ? <FeedbackModal setContentMenu={setContentMenu} category={"Feedback"}/> : null}
        {commentMenu ? <CommentModal setCommentMenu={setCommentMenu} /> : null}

        <HeaderBlock />
        <MarginBox />

        <Box>
          <BetweenBox>
            <FeedbackCategory subject='전체 게시물' select={select1 ? 'select' : 'none'} 
              onClick={() => {
                if(select1) {

                } else {
                  setSelect1(true);
                  setSelect2(false);
                  setSelect3(false);
                }
              }}
            />
            <FeedbackCategory subject='미채택 게시물' select={select2 ? 'select' : 'none'} 
              onClick={() => {
                if(select2) {

                } else {
                  setSelect1(false);
                  setSelect2(true);
                  setSelect3(false);
                }
              }}
            />
            <FeedbackCategory subject='채택 게시물' select={select3 ? 'select' : 'none'} 
              onClick={() => {
                if(select3) {

                } else {
                  setSelect1(false);
                  setSelect2(false);
                  setSelect3(true);
                }
              }}
            />
          </BetweenBox>
        </Box>

        <PostBlock>
          <BorderBox>
            <BetweenBox>
              <FlexBox>
                <ProfilePicture img={user} />
                <Id nickname='손흥민'></Id>
              </FlexBox>
              <ContentButton onClick={() => {setContentMenu(true)}}/>
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

export default Feedback