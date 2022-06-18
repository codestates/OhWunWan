import styled from "styled-components"
import STYLE from "../../config"

// 웰컴페이지 사진

const Picture = styled.img`
  width: ${props => props.flex ? props.flex : STYLE.WELCOME};
  height: ${props => props.height ? props.height : 'none'};
`

function WelcomePicture({img, flex, height}) {
  return (
    <Picture src={img} flex={flex} height={height}></Picture>
  )
}

export default WelcomePicture