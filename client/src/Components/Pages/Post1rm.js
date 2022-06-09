import styled from "styled-components"
import STYLE from "../../config"
import PostingBlock2 from "../Organism/PostingBlock2"
import HeaderBlock from "../Organism/HeaderBlock"
import MarginBox from "../Atoms/MarginBox"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`

function Post1rm() {
  return(
    <Div>
      <MarginBox />
      <HeaderBlock />
      <PostingBlock2 />
    </Div>
  )
}

export default Post1rm