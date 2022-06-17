import styled from "styled-components"
import axios from 'axios'
import STYLE from "../../config";
import { Link,useNavigate } from 'react-router-dom';
import { Fragment } from 'react';



// 포스팅 페이지 업로드 버튼

const Button = styled.span`
  border-radius: 0.3em;
  user-select: none; // 드래그 금지
  display:inline-block; // 패딩
  color: #fff;
  padding: 0 0.2em;
  background-color: #2D9BF0;
  cursor: pointer;
`


const CancelButton = styled.span`
  border-radius: 0.3em;
  user-select: none; // 드래그 금지
  display:inline-block; // 패딩
  color: #fff;
  padding: 0 0.2em;
  background-color: #F24726;
  margin-right: 0.3em;
  cursor: pointer;
`

PostSubmit.defaultProps = {
  text: '업로드',
  onClick: () => {console.log('제출 버튼 동작')}
}

function PostSubmit({formdata,editFormdata,url,replace}) {
  const navigate = useNavigate()

  // props로 전달받은 formedata를 서버로 전송하는 함수 
  const submitHandler = () => {
    axios({
      method: 'post',
      url: `${STYLE.SERVER}/post/${url}`,
      data: formdata,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((res)=>window.location.replace(`${STYLE.CLIENT}/${replace}`))
  .catch((err)=>console.log(err))
  } 

  const editHandler = () => {
    axios({
      method: 'patch',
      url: `${STYLE.SERVER}/post/${url}`,
      data: editFormdata,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((res)=>window.location.replace(`${STYLE.CLIENT}/${replace}`))
  .catch((err)=>console.log(err))
  }
  return(<div>
    <CancelButton onClick={()=>navigate(`/${replace}`)}>{"취소"}</CancelButton>
    <Button onClick={()=>{editFormdata? editHandler():submitHandler()}}>{editFormdata? "수정":"업로드"}</Button>
    </div>
  )
}

export default PostSubmit