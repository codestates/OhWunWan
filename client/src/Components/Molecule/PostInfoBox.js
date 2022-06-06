import STYLE from "../../config"
import styled from "styled-components"
import LikeButton from "../Atoms/LikeButton"
import CommentButton from "../Atoms/CommentButton"
import PostLike from "../Atoms/PostLike"
import PostTime from "../Atoms/PostTime"
import like from "../Picture/LikeButton/like.png"
import liked from "../Picture/LikeButton/liked.png"

const Div = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
`

const Div2 = styled.div`
  display: flex;
`

const Div3 = styled.div`
  display: flex;
  justify-content: space-between;
`

function PostInfoBox() {
  return (
    <Div>
      <Div2>
        <LikeButton img={like} />
        <CommentButton />
      </Div2>
      <Div3>
        <Div3>
          <PostLike count={18} />
          <PostLike count={2} subject='comment' />
        </Div3>
        <Div3>
          <PostTime subject='post' time='2022-06-06 12:32:08' />
        </Div3>
      </Div3>
    </Div>
  )
}

export default PostInfoBox