import styled from "styled-components"
import { useSelector } from "react-redux"
import axios from "axios"
import STYLE from "../../config"

// 게시글 리스펙 버튼 (리스펙 적용 안된 로고)

// img
import respect from "../Picture/RespectButton/respect.png"

const Button = styled.div`
  width: 2em;
  height: 2em;
  /* border: 0.1em solid #000; */
  background-image: url(${props => props.img});
  background-size: contain; // 배경 사이즈: 사이즈에 맞게
  cursor: pointer;
  margin-left: 0.2em;
`

RespectButton.defaultProps = {
  img: respect
}

function RespectButton ({img, post_id, where}) {
  // state 값 가져오기
  let select = useSelector(state => state)

  return (
    <Button img={img} onClick={() => {
      // 벤치프레스 리스펙
      if(where === 'bench') {
        axios.post(`${STYLE.SERVER}/respect/${where}_1rm_respect`, {
          user_id: select.auth.user_info.id,
          bench_1rm_id: post_id
        })
        .then(() => {
          window.location.href = `${STYLE.CLIENT}/1rm`
        })
      } else

      // 데드리프트 리스펙
      if(where === 'dead') {
        axios.post(`${STYLE.SERVER}/respect/${where}_1rm_respect`, {
          user_id: select.auth.user_info.id,
          dead_1rm_id: post_id
        })
        .then(() => {
          window.location.href = `${STYLE.CLIENT}/1rm`
        })
      } else

      // 스쿼트 리스펙
      if(where === 'squat') {
        axios.post(`${STYLE.SERVER}/respect/${where}_1rm_respect`, {
          user_id: select.auth.user_info.id,
          squat_1rm_id: post_id
        })
        .then(() => {
          window.location.href = `${STYLE.CLIENT}/1rm`
        })
      }
    }}></Button>
  )
} 

export default RespectButton