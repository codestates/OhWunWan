import styled from "styled-components"
import { Fragment } from "react"
import post from "../Picture/HeaderButton/post.png";

const Input = styled.input`
  display: none;
`

const Label = styled.label`
`

const Button = styled.img`
  width: 2em;
  height: 2em;
  border-radius: 1em;
` 

Upload.defaultProps = {
  img: post
}

function Upload() {
  return(
    <Fragment>
      <Label htmlFor="imgUpload">
        <Button src={post} />
      </Label>
      <Input 
        type='file' 
        id="imgUpload" 
        accept="image/jpg, impge/png, image/jpeg"
        onChange={(e) => console.log(e.target.files[0])}
        >
      </Input>
    </Fragment>
  )
}

export default Upload

// https://xively.tistory.com/54
// https://velog.io/@min1378/React-image-%EC%97%85%EB%A1%9C%EB%93%9C
// https://gisastudy.tistory.com/100