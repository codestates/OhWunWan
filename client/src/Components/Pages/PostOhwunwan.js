import styled from "styled-components"
import STYLE from "../../config"
import PostingBlock from "../Organism/PostingBlock"
import HeaderBlock from "../Organism/HeaderBlock"
import MarginBox from "../Atoms/MarginBox"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`

function PostOhwunwan() {
  return(
    <Div>
      <MarginBox />
      <HeaderBlock />
      <PostingBlock />
    </Div>
  )
}

export default PostOhwunwan