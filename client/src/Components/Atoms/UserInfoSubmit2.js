import styled from "styled-components"
import STYLE from '../../config'
import axios from 'axios'
import { useSelector } from 'react-redux'

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

function UserInfoSubmit2({text}) {
  const user_info = useSelector((state)=>state.auth.user_info)
  console.log(user_info)
  const deleteHandler = () => {
    axios.post(`${STYLE.SERVER}/auth/logout`).then(()=>
    axios.delete(`${STYLE.SERVER}/user/${user_info.id}`))
    .then((res)=>{window.location.replace(`${STYLE.CLIENT}/`)})
    .catch((err)=>console.log(err))
  }

  return(
    <Button onClick={()=>deleteHandler()} >{text}</Button>
  )
}

export default UserInfoSubmit2