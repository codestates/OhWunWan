import styled from "styled-components"
import { Fragment, useState } from "react"

// 마이페이지 - 회원정보수정 - 프로필 사진 바꾸기

const Button = styled.span`
  user-select: none; // 드래그 금지
  display: inline-block;
  color: #2D9BF0;
  cursor: pointer;
`

ProfileUpload.defaultProps = {
  text: '게시',
  onChange: (e) => console.log(e.target.files[0])
}

function ProfileUpload({text, profilePictureHandler}) {
  return(
    <Fragment>
      <label htmlFor='upload'>
        <Button>{text}</Button>
      </label>
      <input
        type='file'
        id='upload'
        accept="image/*"
        onChange={(e)=>{profilePictureHandler(e.target.files[0])}}
        style={{ display: "none" }} 
      />
    </Fragment>
  )
}

export default ProfileUpload