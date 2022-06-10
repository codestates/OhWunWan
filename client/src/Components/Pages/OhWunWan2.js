import styled from "styled-components";
import { Fragment } from "react";

// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const PostBlock = styled.div`
`

const post_info = ["유저1", "유저2", "유저3", "유저4", "유저5"];

function OhWunWan2() {
  return(
    <Fragment>
      <Wrap>
        <HeaderBlock />
        <MarginBox />
        {post_info.map(post => {
          return(
            <PostBlock>
              <div>{post}</div>
            </PostBlock>
          )  
        })}
        <PostBlock>
          <div>작성중</div>
        </PostBlock>
      </Wrap>
    </Fragment>
  )
}

export default OhWunWan2