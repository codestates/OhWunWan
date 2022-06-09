import styled from "styled-components";
import STYLE from "../../config";
import PostSubmitBox from "../Molecule/PostSubmitBox";
import PostInputBox from "../Molecule/PostInputBox";
import Post1rmBox from "../Molecule/Post1rmBox"
import PostPictureBox from "../Molecule/PostPictureBox";

const Div = styled.div`
  /* width: ${STYLE.WIDTH}; */
  /* height: 40em; */
  /* border: 0.1em solid #000; */
`

function PostingBlock2(text={text}) {
  return(
    <Div>
      <PostSubmitBox/>
      <PostInputBox />
      <Post1rmBox />
      <PostPictureBox />
    </Div>
  )
}

export default PostingBlock2