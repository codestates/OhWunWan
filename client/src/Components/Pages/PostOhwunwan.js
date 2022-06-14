import styled from "styled-components"
import { Fragment, useState } from "react";
import STYLE from "../../config";
import {useSelector} from "react-redux" 


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


function PostOhwunwan() {

  const user_info = useSelector((state)=> state.auth.user_info)
  const copied = JSON.parse(JSON.stringify(user_info))
  
  const [text_content,setText_content] = useState('')

  const formdata = new FormData()

  const textHandler = (value) => {
    setText_content(value)
  }   
  
  const imageHandler = (value) => {
    formdata.append('file', value)
  }
  formdata.append('user_id', copied.id)
  formdata.append('text_content', text_content)

  return(
    <Fragment>
      <Wrap>
        <HeaderBlock />
        <MarginBox />
        
        <BetweenBox>
          <PostSubject text='' />
          <PostSubject text='오운완' />
          <PostSubmit formdata={formdata}/>
        </BetweenBox>

        <BetweenBox>
          <PostInput textHandler={textHandler}/>
          <PostUpload imageHandler={imageHandler}/>
        </BetweenBox>

        <BetweenBox>
          <PostPicture img={preview} />
        </BetweenBox>

      </Wrap>
    </Fragment>
  )
}

export default PostOhwunwan