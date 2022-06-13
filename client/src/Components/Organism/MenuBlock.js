import styled from "styled-components"
import MenuBox from "../Molecule/MenuBox"

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  
`

function MenuBlock() {
  return(
    <Div>
      <MenuBox />
    </Div>
  )
}

export default MenuBlock