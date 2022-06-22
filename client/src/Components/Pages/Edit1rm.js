import styled from "styled-components"
import { Fragment, useState,useEffect } from "react";
import STYLE from "../../config";
import { useSelector } from 'react-redux';

// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";

// Atoms
import PostSubject from "../Atoms/PostSubject";
import PostSubmit from "../Atoms/PostSubmit";
import PostInput from "../Atoms/PostInput";
import PostUpload from "../Atoms/PostUpload";
import PostMenu from "../Atoms/PostMenu";
import PostSelect from "../Atoms/PostSelect";
import PostInput2 from "../Atoms/PostInput2";

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

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`

function Edit1rm() {
  // 리덕스에서 유저 정보 가져오기
  const user_info = useSelector((state)=> state.auth.user_info) 
  // 게시물 수정을 위해 리덕스에 저장된 해당 게시물 정보 가져오기
  const post_info = useSelector((state)=>state.edit.postInfo)
  const category = useSelector((state)=>state.edit.category)
  console.log(category)
  console.log("수정을 위해 보내는 게시물 정보",post_info)

  // 가져온 정보 깊은복사
  const copied = JSON.parse(JSON.stringify(user_info))
  
  // 작성글, 업로드 비디오, 종목선택, 무게 상태관리
  const [text_content,setText_content] = useState('')
  const [video, setVideo] = useState('')
  const [weight, setWeight] = useState('')
  
  // 서버 전송을 위한 객체 생성
  const editFormdata = new FormData()

  // 핸들러를 통한 상태관리
  const textHandler = (value) => {
    setText_content(value)
  }   
  const videoHandler = (value) => {
    setVideo(value)
  }
  const weightHandler = (value) => {
    setWeight(value)
  }
  // 초기 값 
  useEffect(()=>{
    setText_content(post_info.text_content)
    setWeight(post_info.kg)
  },[])
  

  //console.log(fitness)
  // 생성된 객체에 데이터 담아주기
  editFormdata.append(`${category}_id`, post_info.id)
  editFormdata.append('text_content', text_content)
  editFormdata.append('file',video)
    
  return(
    <Fragment>
      <Wrap>
        <HeaderBlock />
        <MarginBox />
        
        <BetweenBox>
          <PostSubject text='' />
          <PostSubject text='1RM' />
          <PostSubmit editFormdata={editFormdata} url={category} replace={"1rm"}/>
        </BetweenBox>

        <BetweenBox>
          <PostInput textHandler={textHandler} editText={post_info.text_content}/>
          <PostUpload videoHandler={videoHandler}/>
        </BetweenBox>

        <BetweenBox>
          <PostMenu text='1RM' />
          <FlexBox>
            <PostInput2 weightHandler={weightHandler} editWeight={post_info.kg}/>
            <PostMenu text='KG' />
          </FlexBox>
        </BetweenBox>

      </Wrap>
    </Fragment>
  )
}

export default Edit1rm