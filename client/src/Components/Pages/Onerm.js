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
import respected from "../Picture/RespectButton/respected.png"
import pic1 from "../Picture/ContentPicture/pic1.webp"

// Atoms
import OnermCategory from "../Atoms/OnermCategory";
import ProfilePicture from "../Atoms/ProfilePicture"
import Id from "../Atoms/Id";
import ContentPicture from "../Atoms/ContentPicture";
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

  // 현재 페이지
  let select = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(header({header: '1rm'}))
  }, [])

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

  return(
    <Fragment>
      <Wrap>
        {/* 메뉴 열고 닫기 */}
        {contentMenu ? <ContentModal setContentMenu={setContentMenu} category={categorySelector(select1,select2,select3)}/> : null}
        {commentMenu ? <CommentModal setCommentMenu={setCommentMenu} /> : null}

        <HeaderBlock />
        <MarginBox />
        
        <Box>
          <BetweenBox>
            <OnermCategory subject='벤치프레스' select={select1 ? 'select' : 'none'} 
              onClick={() => {
                if(select1) {

                } else {
                  setSelect1(true);
                  setSelect2(false);
                  setSelect3(false);
                }
              }}
            />
            <OnermCategory subject='데드리프트' select={select2 ? 'select' : 'none'} 
              onClick={() => {
                if(select2) {

                } else {
                  setSelect1(false);
                  setSelect2(true);
                  setSelect3(false);
                }
              }}
            />
            <OnermCategory subject='스쿼트' select={select3 ? 'select' : 'none'} 
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
              <FlexBox>
                <OnermLogo />
                <OnermRank count='12' />/<OnermRank count='28' />
                <ContentButton onClick={() => {setContentMenu(true)}} />
              </FlexBox>
            </BetweenBox>
          </BorderBox>
          
          <BorderBox>
            <ContentPicture img={pic1} />
          </BorderBox>

          <Box>
            <BetweenBox>
              <FlexBox>
                <RespectButton />
                <RespectButton img={respected} />
                <CommentButton />
              </FlexBox>
              <OnermRecord record='100'  />
            </BetweenBox>
            <BetweenBox>
              <FlexBox>
                <RespectCounts count='0' />
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

export default Onerm