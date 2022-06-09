import styled from "styled-components";
import UserTopBox from "../Molecule/UserTopBox";
import RecordBox from "../Molecule/RecordBox";
import UserDownBox from "../Molecule/UserDownBox";

const Div = styled.div`
`

function UserBlock() {
  return (
    <Div>
      <UserTopBox />
      <RecordBox />
      <UserDownBox />
    </Div>
  )
}

export default UserBlock