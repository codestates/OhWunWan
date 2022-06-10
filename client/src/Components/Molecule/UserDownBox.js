import styled from "styled-components";
import STYLE from "../../config";
import Id from "../Atoms/Id";

const Div = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;
`

function UserDownBox() {
  return (
    <Div>
      <Id nickname='codestates' type='mypage' />
      <Id nickname='님의 작성글' />
    </Div>
  )
}

export default UserDownBox