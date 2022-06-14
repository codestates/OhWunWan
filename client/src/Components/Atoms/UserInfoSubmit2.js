import styled from "styled-components"

// 마이페이지 - 회원정보수정 - 회원탈퇴 버튼

const Button = styled.span`
  border-radius: 0.3em;
  user-select: none; // 드래그 금지
  display:inline-block; // 패딩
  color: #fff;
  padding: 0.1em 0.3em;
  background-color: #F24726;
  cursor: pointer;
  margin-right: 0.1em;
`



UserInfoSubmit2.defaultProps = {
  text: '회원 탈퇴',
  onClick: () => {console.log('제출 버튼 동작')}
}

function UserInfoSubmit2({text, onClick}) {
  return(
    <Button onClick={onClick} >{text}</Button>
  )
}

export default UserInfoSubmit2