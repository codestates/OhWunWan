import styled from "styled-components"
import { Fragment,useState } from "react";
import STYLE from "../../config";
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';

// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";

// Atoms
import PostSubject from "../Atoms/PostSubject";
import PostSubmit from "../Atoms/PostSubmit";
import PostInput from "../Atoms/PostInput";
import PostUpload from "../Atoms/PostUpload";
import ContentVideo from "../Atoms/ContentVideo"

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const BetweenBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
`


function PostFeedback() {
  // 리덕스에서 유저 정보 가져오기 
  const user_info = useSelector((state)=> state.auth.user_info)
  // 가져온 정보 깊은복사
  const copied = JSON.parse(JSON.stringify(user_info))
  
  // 작성글, 업로드 비디오 상태관리
  const [text_content,setText_content] = useState('')
  const [video, setVideo] = useState('')
  
  // 서버 전송을 위한 객체 생성 
  const formdata = new FormData()
  

  // 핸들러를 통한 상태관리
  const textHandler = (value) => {
    setText_content(value)
  }   
  const videoHandler = (value) => {
    setVideo(value)
  }
  
  //console.log(fitness)
  // console.log(weight)
  // 생성된 객체에 데이터 담아주기 
  formdata.append('user_id', copied.id)
  formdata.append('text_content', text_content)  
  formdata.append('file', video)
    
  return(
    <Fragment>
      <Wrap>
        <HeaderBlock />
        <MarginBox />
        
        <BetweenBox>
          <PostSubject text='' />
          <PostSubject text='피드백' />
          <PostSubmit formdata={formdata} url={"feedback"} replace={"feedback"}/>
        </BetweenBox>

        <BetweenBox>
          <PostInput textHandler={textHandler}/>
          <PostUpload videoHandler={videoHandler} />
        </BetweenBox>

        <BetweenBox>
          <ContentVideo video={video ? URL.createObjectURL(video) : null} />
        </BetweenBox>

      </Wrap>
    </Fragment>
  )
}

export default PostFeedback