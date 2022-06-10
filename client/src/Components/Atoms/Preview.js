import styled from "styled-components"
import STYLE from "../../config"

// img
import preview from "../Picture/PostPicture/preview.webp"

const Picture = styled.img`
  width: ${STYLE.WIDTH};
  /* border: 0.1em solid ${STYLE.BORDER_COLOR}; */
`

PostPicture.defaultProps = {
  img: preview
}

function Preview({img}) {
  return (
    <Picture src={img}></Picture>
  )
}

export default Preview