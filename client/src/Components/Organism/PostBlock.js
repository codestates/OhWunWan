import styled from "styled-components";
import PostTopBox from "../Molecule/PostTopBox";
import PictureBox from "../Molecule/PictureBox";
import PostInfoBox from "../Molecule/PostInfoBox";
import TextBox from "../Molecule/TextBox";
import CommentBox from "../Molecule/CommentBox";
import CommentInputBox from "../Molecule/CommentInputBox";

const Div = styled.div`
`

function PostBlock() {
  return (
    <Div>
      <PostTopBox />
      <PictureBox />
      <PostInfoBox />
      <TextBox />
      <CommentBox />
      <CommentInputBox />
    </Div>
  )
}

export default PostBlock