import styled from "styled-components";
import { Fragment, useState } from "react";
import STYLE from "../../config";

// 더미 사진
import user from "../Picture/HeaderButton/user.png"

// img
import pic1 from "../Picture/ContentPicture/pic1.webp"

// Atoms
import ProfilePicture from "../Atoms/ProfilePicture"
import Id from "../Atoms/Id";
import MenuButton from "../Atoms/MenuButton";
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

function Posting() {
  // const [modalOpen, setModalOpen] = useState(true)

  // const openModal = () => {
  //   setModalOpen(true)
  //   console.log(modalOpen)
  // }

  // const closeModal = () => {
  //   setModalOpen(false)
  //   console.log(modalOpen)
  // }

  return(
    <Fragment>
        <PostBlock>
          <BorderBox>
            <BetweenBox>
              <FlexBox>
                <ProfilePicture img={user} />
                <Id nickname='손흥민'></Id>
              </FlexBox>
              <MenuButton onClick={() => {}} />
            </BetweenBox>
          </BorderBox>
          
          <BorderBox>
            <ContentPicture img={pic1} />
          </BorderBox>

          <Box>
            <FlexBox>
              <LikeButton />
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
          
          <Box>
            <FlexBox>
              <ProfilePicture img={user} />
              <Id nickname='helloworld123' />
              <Comment text='댓글이 들어갈 자리입니다'/>
            </FlexBox>
          </Box>
            
          <BorderBox>
            <CommentInput />
            <CommentSubmit />
          </BorderBox>
        </PostBlock>
    </Fragment>
  )
}

export default Posting