import styled from "styled-components"

// 마이페이지에 들어가는 사진 큰사이즈

const Picture = styled.div`
  width: 4em;
  height: 4em;
  border: 0.1em solid #000;
  border-radius: 2em;
  background-image: url(${props => props.img});
  background-size: contain; // 배경 사이즈: 사이즈에 맞게
  background-repeat: no-repeat; // 배경 반복: no
  background-position: center; // 배경 위치: 가운데
  margin-left: 0.5em;
  cursor: pointer;
`

function MypagePicture({img}) {
  return(
    <Picture img={img}></Picture>
  )
}

export default MypagePicture