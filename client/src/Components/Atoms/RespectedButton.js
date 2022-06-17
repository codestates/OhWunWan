import styled from "styled-components"

// 게시글 리스펙 버튼 (리스펙 적용된 로고) - 기능은 없음(취소 X)

// img
import respected from "../Picture/RespectButton/respected.png"

const Button = styled.div`
  width: 2em;
  height: 2em;
  /* border: 0.1em solid #000; */
  background-image: url(${props => props.img});
  background-size: contain; // 배경 사이즈: 사이즈에 맞게
  cursor: pointer;
  margin-left: 0.2em;
`

RespectedButton.defaultProps = {
  img: respected
}

function RespectedButton ({img}) {
  return (
    <Button img={img} ></Button>
  )
} 

export default RespectedButton