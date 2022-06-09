import styled from "styled-components";
import STYLE from "../../config";
import SubmitButton from "../Atoms/SubmitButton"

const Div = styled.div`
  width: ${STYLE.WIDTH};
  height: 3em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4em 0;
`

function UserInfoDownBox() {
  return(
    <Div>
      <span>회원탈퇴를 진행하시고, 되돌릴 수 없으니 신중히 선택해주세요.</span>
      <SubmitButton text='탈퇴' type='' />
    </Div>
  )
}

export default UserInfoDownBox