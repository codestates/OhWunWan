import styled from "styled-components"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// 게시글에 들어가는 아이디
// 일단 댓글에도 사용중
// 마이페이지 - 회원정보수정 - 아이디

const Name = styled.span`
  font-size: 1em;
  /* margin-left: 0.2em; */
  user-select: none; // 드래그 금지
  font-weight: bold;
`

function Id({nickname}) {
  const user = useSelector((state)=>state.auth.user_info.nickname)

  return(
    <Link to={`/user/${nickname}`}>
      <Name >{nickname}</Name>
    </Link>
  )
}

export default Id