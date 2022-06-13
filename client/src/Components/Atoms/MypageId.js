import styled from "styled-components"

// 마이페이지 상단에 들어가는 아이디

const Name = styled.span`
  font-size: 1.2em;
  margin-left: 0.2em;
  user-select: none; // 드래그 금지
  font-weight: bold;
`

MypageId.defaultProps = {
  nickname: 'codestates'
}

function MypageId({nickname}) {
  return(
    <Name >{nickname}</Name>
  )
}

export default MypageId