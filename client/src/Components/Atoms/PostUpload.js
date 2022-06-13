import styled from "styled-components"
import { Fragment } from "react"
import post from "../Picture/HeaderButton/post.png";

// 포스팅 => 오운완 사진 입력하는 버튼

const Button = styled.img`
  width: 2em;
  border-radius: 1em;
  margin-right: 0.5em;
`

PostUpload.defaultProps = {
  onChange: (e) => console.log(e.target.files[0])
}

function PostUpload({onChange}) {
  return(
    <Fragment>
      <label htmlFor='upload'>
        <Button src={post} />
      </label>
      <input
        type='file'
        id='upload'
        accept="image/*"
        onChange={onChange}
        style={{ display: "none" }} 
      />
    </Fragment>
  )
}

export default PostUpload