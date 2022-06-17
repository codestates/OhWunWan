import styled from "styled-components"
import axios from 'axios'
import STYLE from '../../config'

// 마이페이지 - 회원정보수정 - 닉네임 변경 버튼

const Button = styled.span`
  border-radius: 0.3em;
  user-select: none; // 드래그 금지
  display:inline-block; // 패딩
  color: #fff;
  padding: 0.1em 0.3em;
  background-color: #2D9BF0;
  cursor: pointer;
`

UserInfoSubmit.defaultProps = {
  text: '변경',
  onClick: () => {console.log('제출 버튼 동작')}
}

function UserInfoSubmit({text,nickname, onClick,editFormdata}) {
  // 수정을 위해 서버로 보내는 요청 
  const editHandler = () => {
    axios({
      method: 'patch',
      url: `${STYLE.SERVER}/user`,
      data: editFormdata,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((res)=>window.location.replace(`${STYLE.CLIENT}/user`))
  .catch((err)=>console.log(err))
  }

  return(
    <Button onClick={()=>editHandler()} >{text}</Button>
  )
}

export default UserInfoSubmit