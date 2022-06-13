import styled from "styled-components"

// 마이페이지 - 유저정보수정의 프로필 사진

const Picture = styled.div`
  width: 2.4em;
  height: 2.4em;
  border: 0.1em solid #000;
  border-radius: 1.2em;
  background-image: url(${props => props.img});
  background-size: contain; // 배경 사이즈: 사이즈에 맞게
  background-repeat: no-repeat; // 배경 반복: no
  background-position: center; // 배경 위치: 가운데
  margin-right : 0.2em;
  cursor: pointer;
`

function UserinfoPicture({img}) {
  return(
    <Picture img={img}></Picture>
  )
}

export default UserinfoPicture