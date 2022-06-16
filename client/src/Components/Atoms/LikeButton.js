import styled from "styled-components"
import { useSelector } from "react-redux"
import axios from "axios"
import STYLE from "../../config"

// 게시글 좋아요 버튼 (좋아요 적용 안된 하트 - 하양 하트)

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
}

function LikeButton ({img, post_id, where}) {
   // state 값 가져오기
   let select = useSelector(state => state)

  return (
    <Button img={img} onClick={() => {
      // 오운완 좋아요
      if(where === 'ohwunwan') {
        axios.post(`${STYLE.SERVER}/like/${where}_like`, {
          ohwunwan_id: post_id,
          user_id: select.auth.user_info.id
        })
        .then(() => {
          window.location.href = `${STYLE.CLIENT}/${where}`
        })
      } else 

      // 피드백 좋아요
      if(where === 'feedback') {
        axios.post(`${STYLE.SERVER}/like/${where}_like`, {
          feedback_id: post_id,
          user_id: select.auth.user_info.id
        })
        .then(() => {
          window.location.href = `${STYLE.CLIENT}/${where}`
        })
      }
    }}></Button>
  )
} 

export default LikeButton