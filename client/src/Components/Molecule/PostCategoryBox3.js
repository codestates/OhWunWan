import styled from "styled-components"
import STYLE from "../../config"
import PostCategoryButton from "../Atoms/PostCategoryButton"
import { Link } from "react-router-dom";


const Div = styled.div`
  width: ${STYLE.WIDTH};
  height: 50em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  display: flex;
  justify-content: space-around;
  align-items: center;
`

function PostCategoryBox3() {
  return(
    <Div>
      <Link to='/post/ohwunwan'>
        <PostCategoryButton text='오운완' />
      </Link>

      <Link to='/post/1rm'>
        <PostCategoryButton text='1RM' />
      </Link>

      <Link to='/post/feedback'>
        <PostCategoryButton text='피드백' />
      </Link>
    </Div>
  )
}

export default PostCategoryBox3