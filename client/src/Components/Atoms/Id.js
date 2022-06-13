import styled from "styled-components"

// 게시글에 들어가는 아이디
// 일단 댓글에도 사용중
// 마이페이지 - 회원정보수정 - 아이디

const Name = styled.span`
  font-size: 1em;
  /* margin-left: 0.2em; */
  user-select: none; // 드래그 금지
  font-weight: bold;
`

Id.defaultProps = {
  nickname: 'codestates'
}

function Id({nickname}) {
  return(
    <Name >{nickname}</Name>
  )
}

export default Id