import styled from "styled-components"
import { Fragment } from "react";
import STYLE from "../../config";
import { Link } from "react-router-dom";

// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";

// Atoms
import PostCategoryButton from "../Atoms/PostCategoryButton";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const AroundBox = styled.div`
  width: ${STYLE.WIDTH};
  height: 50em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  display: flex;
  justify-content: space-around;
  align-items: center;
`

function PostCategory() {
  return(
    <Fragment>
      <Wrap>
        <HeaderBlock />
        <MarginBox />

        <AroundBox>
          <Link to='/post/ohwunwan'>
            <PostCategoryButton text='오운완' />
          </Link>

          <Link to='/post/1rm'>
            <PostCategoryButton text='1RM' />
          </Link>

          <Link to='/post/feedback'>
            <PostCategoryButton text='피드백' />
          </Link>
        </AroundBox>
      </Wrap>
    </Fragment>
  )
}

export default PostCategory