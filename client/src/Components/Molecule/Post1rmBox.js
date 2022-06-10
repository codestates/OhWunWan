import styled from "styled-components"
import STYLE from "../../config"
import PostSubject from "../Atoms/PostSubject"
import PostInput from "../Atoms/PostInput"
import PostSelect from "../Atoms/PostSelect"

const Div = styled.div`
  /* width: ${STYLE.WIDTH};
  height: 3em;
  border: 0.1em solid ${STYLE.BORDER_COLOR}; */
`

const Div2 = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  padding: 0.2em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Div3 = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  /* border: 0.1em solid #000; */
`

function Post1rmBox() {
  return (
    <Div>
      <Div2>
        <PostSubject text='종목선택' />
        <PostSelect />
      </Div2>
      <Div2>
        <PostSubject text='1RM' />
        <Div3>
          <PostInput />
          <span>KG</span>
        </Div3>
      </Div2>
    </Div>
  )
}

export default Post1rmBox