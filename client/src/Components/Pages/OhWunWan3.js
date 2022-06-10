import styled from "styled-components";
import { Fragment } from "react";
import STYLE from "../../config";

// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";

// 더미 사진
import user from "../Picture/HeaderButton/user.png"

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const PostBlock = styled.div`
  margin-bottom: 5em;
`

const CommentBox = styled.div`
  display: flex;
  align-items: center;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  width: ${STYLE.WIDTH};
  /* height: 2em; */
`
const Box = styled.div`
  display: flex;
  align-items: center;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  width: ${STYLE.WIDTH};
  height: 2em;
`

// Atoms
const UserProfile = styled.div`
  width: ${props => props.type === 'comment' ? '1em' : '1.6em'};
  height: ${props => props.type === 'comment' ? '1em' : '1.6em'};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  border-radius: 0.8em;
  background-image: url(${props => props.img});
  background-size: contain; // 배경 사이즈: 사이즈에 맞게
  background-repeat: no-repeat; // 배경 반복: no
  background-position: center; // 배경 위치: 가운데
  cursor: pointer;
` 

const Id = styled.span`
  font-size: ${props => props.type === 'comment' ? '1em' : '1.6em'};
  user-select: none; // 드래그 금지
  font-weight: bold;
`
// 더미 데이터
const post_info = [
  {text_content: '오운완 완료', user_id: '손흥민'},
  {text_content: '오늘도 운동 클리어', user_id: '코드스테이츠'},
  {text_content: '불태웠다', user_id: '투썸'},
  {text_content: '클럽은 헬스클럽', user_id: 'codestates'},
];
const comment_info = [
  {text_content: '운동하시느라 고생하셨습니다', user_id: '손흥민'},
  {text_content: '저는 오늘은 운동 쉬려고요', user_id: '코드스테이츠'},
];

function OhWunWan3() {
  return(
    <Fragment>
      <Wrap>
        <HeaderBlock />
        <MarginBox />
        
        {post_info.map(post => {
          return(
            <PostBlock>
              <Box>
                <UserProfile img={user} onClick={() => {}} />
                <Id>{post.user_id}</Id>
                <p>{post.text_content}</p>
              </Box>
              
              {comment_info.map(comment => {
                return (
                  <CommentBox>
                    <UserProfile type='comment' img={user} onClick={() => {}} />
                    <Id type='comment'>{comment.user_id}</Id>
                    <p>{comment.text_content}</p>
                  </CommentBox>
                )
              })}

            </PostBlock>
          )  
        })}

      </Wrap>
    </Fragment>
  )
}

export default OhWunWan3