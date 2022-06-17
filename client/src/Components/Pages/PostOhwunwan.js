import styled from "styled-components"
import { Fragment, useState ,useEffect} from "react";
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
  // 리덕스에서 유저 정보 가져오기
  const user_info = useSelector((state)=> state.auth.user_info) 
  // 가져온 정보 깊은복사
  const copied = JSON.parse(JSON.stringify(user_info))
  
  // 작성글, 업로드 사진 상태관리
  const [text_content,setText_content] = useState('')
  const [picture, setPicture] = useState('')

  // 서버로 전송을 위한 객체 생성
  const formdata = new FormData()
  // 수정을 위한 객체 생성 
  
  // 핸들러를 통한 상태 관리
  const textHandler = (value) => {
    setText_content(value)
  }   
  //console.log(text_content)
  const imageHandler = (value) => {
    setPicture(value)
  }
  
  // 생성된 객체에 데이터 담아주기
  formdata.append('user_id', copied.id)
  formdata.append('text_content', text_content)
  formdata.append('file', picture)
  console.log(formdata.getAll("file"))
  

  return(
    <Fragment>
      <Wrap>
        <HeaderBlock />
        <MarginBox />
        
        <BetweenBox>
          <PostSubject text='' />
          <PostSubject text='오운완' />
          <PostSubmit formdata={formdata} url={"ohwunwan"} replace={"ohwunwan"}/>
        </BetweenBox>

        <BetweenBox>
          <PostInput textHandler={textHandler} />
          <PostUpload imageHandler={imageHandler} />
        </BetweenBox>

        <BetweenBox>
          <PostPicture img={picture? URL.createObjectURL(picture) : preview} /> 
        </BetweenBox>

      </Wrap>
    </Fragment>
  )
}

export default PostOhwunwan