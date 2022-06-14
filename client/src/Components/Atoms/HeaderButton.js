import styled from "styled-components"
import STYLE from "../../config";

// 헤더 버튼 이미지

// img
import post from "../Picture/HeaderButton/post.png";
import onerm from "../Picture/HeaderButton/1rm.png";

const Button = styled.div`
  width: 2.4em;
  height: 2.4em;
  border: ${props => props.select  ? "0.2em solid #2D9BF0": "0.2em solid #000"};
  /* border: ; */
  border-radius: ${props => props.circle ? "1.2em" : "0.4em"};
  background-image: url(${props => props.img});
  background-size: contain; // 배경 사이즈: 사이즈에 맞게
  background-repeat: no-repeat; // 배경 반복: no
  background-position: center; // 배경 위치: 가운데
  margin-right : 0.2em;
  cursor: pointer;
`

HeaderButton.defaultProps = {
  img: post,
}

function HeaderButton({img, circle, onClick, select}) {
  return (
    <Button img={img} circle={circle} onClick={onClick} select={select}></Button>
  )
}

export default HeaderButton