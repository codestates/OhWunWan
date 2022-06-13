import styled from "styled-components"
import { Fragment } from "react";
import STYLE from "../../config";

// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";

// Atoms
import PostSubject from "../Atoms/PostSubject";
import PostSubmit from "../Atoms/PostSubmit";
import PostInput from "../Atoms/PostInput";
import PostUpload from "../Atoms/PostUpload";
import PostMenu from "../Atoms/PostMenu";
import PostSelect from "../Atoms/PostSelect";
import PostInput2 from "../Atoms/PostInput2";

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

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`

function Post1rm() {
  return(
    <Fragment>
      <Wrap>
        <HeaderBlock />
        <MarginBox />
        
        <BetweenBox>
          <PostSubject text='' />
          <PostSubject text='1RM' />
          <PostSubmit onClick={() => {}} />
        </BetweenBox>

        <BetweenBox>
          <PostInput />
          <PostUpload />
        </BetweenBox>

        <BetweenBox>
          <PostMenu text='종목선택' />
          <PostSelect />
        </BetweenBox>

        <BetweenBox>
          <PostMenu text='1RM' />
          <FlexBox>
            <PostInput2 />
            <PostMenu text='KG' />
          </FlexBox>
        </BetweenBox>

      </Wrap>
    </Fragment>
  )
}

export default Post1rm