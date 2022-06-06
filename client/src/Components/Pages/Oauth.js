import styled from "styled-components";
import Loding from "../Atoms/Loding";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
`

function Oauth() {
  return(
    <Div>
      <Loding />
    </Div>
  )
}

export default Oauth