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


function EditFeedback() {
  // 리덕스에서 유저 정보 가져오기
  const user_info = useSelector((state)=> state.auth.user_info) 
  // 게시물 수정을 위해 리덕스에 저장된 해당 게시물 정보 가져오기
  const post_info = useSelector((state)=>state.edit.postInfo)
  //console.log("수정을 위해 보내는 게시물 정보",post_info)
  // 가져온 정보 깊은복사
  const copied = JSON.parse(JSON.stringify(user_info))
  
  // 작성글, 업로드 사진 상태관리
  const [text_content,setText_content] = useState('')
  const [video, setVideo] = useState('')


  // 서버로 전송을 위한 객체 생성
  const editFormdata = new FormData()
  // 수정을 위한 객체 생성 
  
  // 핸들러를 통한 상태 관리
  const textHandler = (value) => {
    setText_content(value)
  }   
  const imageHandler = (value) => {
    setVideo(value)
  }
  // 초기 값 
  useEffect(()=>{
    setText_content(post_info.text_content)
  },[])

  // 생성된 객체에 데이터 담아주기
  editFormdata.append('user_id', post_info.id)
  editFormdata.append('text_content', text_content)
  editFormdata.append('file',video)
  console.log(editFormdata.getAll("file"))
  //console.log(editFormdata.getAll('text_content'))
  //console.log(post_info.text_content)
  return(
    <Fragment>
      <Wrap>
        <HeaderBlock />
        <MarginBox />
        
        <BetweenBox>
          <PostSubject text='' />
          <PostSubject text='오운완' />
          <PostSubmit editFormdata={editFormdata} url={"ohwunwan"} replace={"ohwunwan"} />
        </BetweenBox>

        <BetweenBox>
          <PostInput textHandler={textHandler} editText={post_info.text_content} />
          <PostUpload imageHandler={imageHandler} />
        </BetweenBox>

        <BetweenBox>
        </BetweenBox>

      </Wrap>
    </Fragment>
  )
}

export default EditFeedback