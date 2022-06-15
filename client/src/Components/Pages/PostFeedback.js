import styled from "styled-components"
import { Fragment,useState } from "react";
import STYLE from "../../config";
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';

// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";

// 더미데이터
import preview from "../Picture/PostPicture/preview.webp"

// Atoms
import PostSubject from "../Atoms/PostSubject";
import PostSubmit from "../Atoms/PostSubmit";
import PostInput from "../Atoms/PostInput";
import PostUpload from "../Atoms/PostUpload";
import PostPicture from "../Atoms/PostPicture";

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
  const user_info = useSelector((state)=> state.auth.user_info)
  const copied = JSON.parse(JSON.stringify(user_info))
  const [text_content,setText_content] = useState('')
  const [video, setVideo] = useState('')

  const formdata = new FormData()

  const textHandler = (value) => {
    setText_content(value)
  }   
  
  const videoHandler = (value) => {
    setVideo(value)
  }

  //console.log(fitness)
  // console.log(weight)
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
          <PostPicture img={preview}/>
        </BetweenBox>

      </Wrap>
    </Fragment>
  )
}

export default PostFeedback