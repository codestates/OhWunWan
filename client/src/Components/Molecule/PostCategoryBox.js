import styled from "styled-components"
import STYLE from "../../config"
import PostCategory from "../Atoms/PostCategory"

const Div = styled.div`
  width: ${STYLE.WIDTH};
  height: 2em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`

function PostCategoryBox() {
  return (
    <Div>
      <PostCategory subject="벤치프레스" select='select' />
      <PostCategory subject="데드리프트" />
      <PostCategory subject="스쿼트" />
    </Div>
  )
}

export default PostCategoryBox