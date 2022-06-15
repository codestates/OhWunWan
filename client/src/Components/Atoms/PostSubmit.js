import styled from "styled-components"
import {useSelector} from "react-redux" 
import { useState } from 'react'
import axios from 'axios'


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

PostSubmit.defaultProps = {
  text: '업로드',
  onClick: () => {console.log('제출 버튼 동작')}
}

function PostSubmit({formdata,url,replace}) {
  return(
    <Button onClick={()=>{axios({
      method: 'post',
      url: `https://localhost:4000/post/${url}`,
      data: formdata,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((res)=>window.location.replace(`https://localhost:3000/${replace}`))}}>업로드</Button>
  )
}

export default PostSubmit