import styled from "styled-components"
import STYLE from "../../config"

// img
import pic1 from "../Picture/ContentPicture/pic1.webp"

const Picture = styled.img`
  width: ${STYLE.WIDTH};
`

ContentPicture.defaultProps = {
  img: pic1
}

function ContentPicture({img}) {
  return (
    <Picture src={img}></Picture>
  )
}

export default ContentPicture