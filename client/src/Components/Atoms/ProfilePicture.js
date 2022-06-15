import styled from "styled-components"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

// 게시글에 들어가는 사진 중간사이즈
// 일단 댓글에도 사용중

const Picture = styled.div`
  width: 1.6em;
  height: 1.6em;
  border: 0.1em solid #000;
  border-radius: 0.8em;
  background-image: url(${props => props.img});
  background-size: contain; // 배경 사이즈: 사이즈에 맞게
  background-repeat: no-repeat; // 배경 반복: no
  background-position: center; // 배경 위치: 가운데
  margin : 0 0.2em;
  cursor: pointer;
`

function ProfilePicture({img}) {
  const user = useSelector((state)=>state.auth.user_info.nickname)

  return(
    <Link to={`/mypage/${user}`}>
        <Picture img={img} ></Picture>
    </Link>
  )
}

export default ProfilePicture