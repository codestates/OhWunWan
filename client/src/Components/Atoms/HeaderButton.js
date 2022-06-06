import styled from "styled-components"
import STYLE from "../../config";

// img
import post from "../Picture/HeaderButton/post.png";
import ohwunwan from "../Picture/HeaderButton/ohwunwan.png";
import onerm from "../Picture/HeaderButton/1rm.png";
import feedback from "../Picture/HeaderButton/feedback.png";
import user from "../Picture/HeaderButton/user.png";

const Button = styled.div`
  width: ${props => props.type === 'post' ? '2em' : '3em'};
  height: ${props => props.type === 'post' ? '2em' : '3em'};
  border: ${props => props.type === 'post' ? `0.1em solid ${STYLE.BORDER_COLOR}` : '0.1em solid #000;'};
  border-radius: ${props => props.circle ? "1.5em" : 
  props.type === 'post' ? '1em' : "0.5em"};
  background-image: url(${props => props.img});
  background-size: contain; // 배경 사이즈: 사이즈에 맞게
  background-repeat: no-repeat; // 배경 반복: no
  background-position: center; // 배경 위치: 가운데
  background-color: ${props => props.img === onerm ? "#000" : "none"};
  margin-left: ${props => props.type === 'post' ? '0.1em' : 'none'}; 
  cursor: pointer;
`

HeaderButton.defaultProps = {
  img: post
}

function HeaderButton({img, circle, type}) {
  return (
    <Button img={img} circle={circle} type={type} ></Button>
  )
}

export default HeaderButton