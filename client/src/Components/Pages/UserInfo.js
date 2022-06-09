import styled from "styled-components"
import HeaderBlock from "../Organism/HeaderBlock"
import MarginBox from "../Atoms/MarginBox"
import UserInfoBlock from "../Organism/UserInfoBlock"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`

function UserInfo() {
  return(
    <Div>
      <HeaderBlock />
      <MarginBox />
      <UserInfoBlock />
    </Div>
  )
}

export default UserInfo