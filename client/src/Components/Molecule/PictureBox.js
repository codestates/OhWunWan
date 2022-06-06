import styled from "styled-components"
import PostPicture from "../Atoms/PostPicture"
import STYLE from "../../config"
import pic1 from "../Picture/PostPicture/pic1.webp"
import pic2 from "../Picture/PostPicture/pic2.webp"

const Div = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
`

function PictureBox() {
  return (
    <Div>
      <PostPicture img={pic1} />
    </Div>
  )
}

export default PictureBox