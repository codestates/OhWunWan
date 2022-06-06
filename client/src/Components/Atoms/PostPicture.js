import styled from "styled-components"
import STYLE from "../../config"

// img
import pic1 from "../Picture/PostPicture/pic1.webp"
import pic2 from "../Picture/PostPicture/pic2.webp"

const Picture = styled.img`
  width: ${STYLE.WIDTH};
  /* border: 0.1em solid ${STYLE.BORDER_COLOR}; */
`

PostPicture.defaultProps = {
  img: pic1
}

function PostPicture({img}) {
  return (
    <Picture src={img}></Picture>
  )
}

export default PostPicture