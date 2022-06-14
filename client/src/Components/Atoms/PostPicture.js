import styled from "styled-components"
import STYLE from "../../config"

// 포스팅 미리보기

// img
import preview from "../Picture/PostPicture/preview.webp"

const Picture = styled.img`
  width: ${STYLE.WIDTH};
`

PostPicture.defaultProps = {
  img: preview
}

function PostPicture({img}) {
  return (
    <Picture src={img}></Picture>
  )
}

export default PostPicture