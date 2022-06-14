import styled from "styled-components"

// 게시글 리스펙 버튼 (하트말고)

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
  img: respect,
  like: () => {console.log("리스펙 버튼 동작")}
}

function RespectButton ({img, Respect}) {
  return (
    <Button img={img} onClick={Respect}></Button>
  )
} 

export default RespectButton