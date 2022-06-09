import styled from "styled-components"
import HeaderBlock from "../Organism/HeaderBlock"
import MarginBox from "../Atoms/MariginBox"
import UserBlock from "../Organism/UserBlock"
import PostBlock from '../Organism/PostBlock'


const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`

function Mypage() {
  return(
    <Div>
      <HeaderBlock />
      <MarginBox />
      <UserBlock />
      <PostBlock first='first' />
      <PostBlock />
    </Div>
  )
}

export default Mypage