import styled from "styled-components"
import STYLE from "../../config"

// 마이페이지 상단 회원정보수정 버튼

const Button = styled.span`
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  text-align: center;
  border-radius: 0.5em;
  user-select: none; // 드래그 금지
  display:inline-block; // padding 작동시키려고 작성
  padding: 0.4em 11em;
  cursor: pointer;
  /* font-size: 1.2em; */
`

function MypageButton({text}) {
  return(
    <Button>{text}</Button>
  )
}

export default MypageButton