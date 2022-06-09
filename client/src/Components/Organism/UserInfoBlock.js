import styled from "styled-components";
import UserInfoTopBox from "../Molecule/UserInfoTopBox"
import UserInfoDownBox from "../Molecule/UserInfoDownBox"

const Div = styled.div`
`

function UserInfoBlock() {
  return (
    <Div>
      <UserInfoTopBox />
      <UserInfoDownBox />
    </Div>
  )
}

export default UserInfoBlock