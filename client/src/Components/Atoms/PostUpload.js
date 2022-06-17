import styled from "styled-components"
import { Fragment } from "react"
import post from "../Picture/Upload/upload.png"

// 포스팅 => 오운완 사진 입력하는 버튼

const Button = styled.img`
  width: 2em;
  border-radius: 1em;
  margin-right: 0.5em;
`

PostUpload.defaultProps = {
  onChange: (e) => console.log(e.target.files[0])
}

function PostUpload({imageHandler,videoHandler}) {
  return(
    <Fragment>
      <label htmlFor='upload'>
        <Button src={post} />
      </label>
      {videoHandler ? <input
        type='file'
        id='upload'
        accept="video/*"
        onChange={(e)=>{videoHandler(e.target.files[0])}}
        style={{ display: "none" }} 
      />: imageHandler? <input
        type='file'
        id='upload'
        accept="image/*"
        onChange={(e)=>{imageHandler(e.target.files[0])}}
        style={{ display: "none" }} 
      />:console.log("err")}
    </Fragment>
  )
}

export default PostUpload