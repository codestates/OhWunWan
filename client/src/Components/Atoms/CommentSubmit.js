import styled from "styled-components"
import axios from "axios"
import { useSelector } from "react-redux"
import STYLE from "../../config"

// 게시글 - 댓글 게시 버튼

const Button = styled.span`
  user-select: none; // 드래그 금지
  display: inline-block;
  color: #2D9BF0;
  cursor: pointer;
`

CommentSubmit.defaultProps = {
  text: '게시',
  onClick: () => {console.log('제출 버튼 동작')}
}

function CommentSubmit({text, post_id, where}) {
  // state 값 가져오기
  let select = useSelector(state => state)

  return(
    <Button onClick={() => {
      // console.log(select.auth.user_info.id, select.comment.comment, post_id, where)
      // console.log(`${STYLE.SERVER}/comment/${where}_comment`)
      // console.log(`${STYLE.SERVER}/comment/${where}_1rm_comment`)
      if(where === 'feedback') {
        axios.post(`${STYLE.SERVER}/comment/${where}_comment`, {
          feedback_id: post_id,
          user_id: select.auth.user_info.id,
          text_content: select.comment.comment
        })
        .then(() => {
          window.location.href = `${STYLE.CLIENT}/${where}`
        })
      } else

      if(where === 'ohwunwan') {
        axios.post(`${STYLE.SERVER}/comment/${where}_comment`, {
          ohwunwan_id: post_id,
          user_id: select.auth.user_info.id,
          text_content: select.comment.comment
        })
        .then(() => {
          window.location.href = `${STYLE.CLIENT}/${where}`
        })
      } else

      if(where === 'bench') {
        axios.post(`${STYLE.SERVER}/comment/${where}_1rm_comment`, {
          bench_1rm_id: post_id,
          user_id: select.auth.user_info.id,
          text_content: select.comment.comment
        })
        .then(() => {
          window.location.href = `${STYLE.CLIENT}/1rm`
        })
      } else

      if(where === 'dead') {
        axios.post(`${STYLE.SERVER}/comment/${where}_1rm_comment`, {
          dead_1rm_id: post_id,
          user_id: select.auth.user_info.id,
          text_content: select.comment.comment
        })
        .then(() => {
          window.location.href = `${STYLE.CLIENT}/1rm`
        })
      } else

      if(where === 'squat') {
        axios.post(`${STYLE.SERVER}/comment/${where}_1rm_comment`, {
          squat_1rm_id: post_id,
          user_id: select.auth.user_info.id,
          text_content: select.comment.comment
        })
        .then(() => {
          window.location.href = `${STYLE.CLIENT}/1rm`
        })
      } 
    }}
    >{text}</Button>
  )
}

export default CommentSubmit