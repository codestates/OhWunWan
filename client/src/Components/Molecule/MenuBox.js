import styled from "styled-components";
import STYLE from "../../config"
import SubmitButton from "../Atoms/SubmitButton"

const Div = styled.div`
`

const Div2 = styled.div`
  width: 20em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  text-align: center;
  padding: 0.2em 0;
  background-color: #fff;
`

function MenuBox() {
  return(
    <Div>
      <Div2>
        <SubmitButton text='수정' type='black' />
      </Div2>
      <Div2>
        <SubmitButton text='삭제' type='red' />
      </Div2>
      <Div2>
        <SubmitButton text='취소' type='black' onClick={() => {
          
        }} />
      </Div2>
    </Div>
  )
}

export default MenuBox