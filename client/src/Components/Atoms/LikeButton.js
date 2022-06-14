import styled from "styled-components"

// 게시글 좋아요 버튼 (하트)

// img
import like from "../Picture/LikeButton/like.png"
import liked from "../Picture/LikeButton/liked.png"

const Button = styled.div`
  width: 2em;
  height: 2em;
  /* border: 0.1em solid #000; */
  background-image: url(${props => props.img});
  background-size: contain; // 배경 사이즈: 사이즈에 맞게
  cursor: pointer;
  margin-left: 0.2em;
`

LikeButton.defaultProps = {
  img: like,
  like: () => {console.log("좋아요 버튼 동작")}
}

function LikeButton ({img, like}) {
  return (
    <Button img={img} onClick={like}></Button>
  )
} 

export default LikeButton