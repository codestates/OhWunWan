import styled from "styled-components"
import { Fragment } from "react";
import STYLE from "../../config";

// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";

// 더미데이터
import preview from "../Picture/PostPicture/preview.webp"

// Atoms
import PostSubject from "../Atoms/PostSubject";
import PostSubmit from "../Atoms/PostSubmit";
import PostInput from "../Atoms/PostInput";
import PostUpload from "../Atoms/PostUpload";
import PostPicture from "../Atoms/PostPicture";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const BetweenBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
`


function PostOhwunwan() {
  return(
    <Fragment>
      <Wrap>
        <HeaderBlock />
        <MarginBox />
        
        <BetweenBox>
          <PostSubject text='' />
          <PostSubject text='오운완' />
          <PostSubmit onClick={() => {}} />
        </BetweenBox>

        <BetweenBox>
          <PostInput />
          <PostUpload />
        </BetweenBox>

        <BetweenBox>
          <PostPicture img={preview} />
        </BetweenBox>

      </Wrap>
    </Fragment>
  )
}

export default PostOhwunwan