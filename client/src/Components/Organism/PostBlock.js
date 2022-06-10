import styled from "styled-components";
import { Fragment } from "react";
import PostTopBox from "../Molecule/PostTopBox";
import PictureBox from "../Molecule/PictureBox";
import PostInfoBox from "../Molecule/PostInfoBox";
import TextBox from "../Molecule/TextBox";
import CommentBox from "../Molecule/CommentBox";
import CommentInputBox from "../Molecule/CommentInputBox";

const Div = styled.div`
  margin-top: ${props => props.first === 'first' ? '0.2em' : '1.0em'}
`

function PostBlock({first}) {
  return (
    <Div first={first}>
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