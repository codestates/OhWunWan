import styled from "styled-components"
import HeaderBlock from "../Organism/HeaderBlock"
import PostCategoryBox3 from "../Molecule/PostCategoryBox3"
import MarginBox from "../Atoms/MariginBox"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function PostCategory() {
  return(
    <Div>
      <MarginBox />
      <HeaderBlock />
      <PostCategoryBox3 />
    </Div>
  )
}

export default PostCategory