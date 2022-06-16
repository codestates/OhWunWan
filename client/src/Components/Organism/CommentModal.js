import styled from "styled-components";
import { Fragment } from "react";
import STYLE from "../../config"
import SubmitButton from "../Atoms/SubmitButton"
import axios from 'axios';

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Div2 = styled.div`
  width: 20em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  text-align: center;
  padding: 0.2em 0;
  background-color: #fff;
`

function CommentModal({setCommentMenu, category,commentInfo}) {
  console.log(commentInfo)
  
  const deleteHandler = () => {
    axios.delete(`${STYLE.SERVER}/comment/${category}_comment/${commentInfo.id}`)
    .then((res)=>{window.location.replace(`${STYLE.CLIENT}/${category === "bench_1rm" ? "1rm" : category ==="dead_1rm" ? "1rm" : category ==="squat_1rm" ? "1rm" :category }`)})
    .catch((err)=>console.log(err))
  }
  
  const selectHandler = () => {
    axios.post(`${STYLE.SERVER}/${category}_comment/selection`,{data:commentInfo.id})
    .then((res)=>{window.location.replace(`${STYLE.CLIENT}/${category === "bench_1rm" ? "1rm" : category ==="dead_1rm" ? "1rm" : category ==="squat_1rm" ? "1rm" :category }`)})
    .catch((err)=>console.log(err))
  }

  return(
    <Fragment>
      <Div>
        {category ==='feedback' ?
        <Div2>
          <SubmitButton text='채택' type='blue' onClick={()=>selectHandler()}/>
        </Div2>:''}
        <Div2>
          <SubmitButton text='삭제' type='red' onClick={()=>deleteHandler()}/>
        </Div2>
        <Div2>
          <SubmitButton text='취소' type='black' onClick={() => {setCommentMenu(false)}} />
        </Div2>
      </Div>
    </Fragment>
  )
}

export default CommentModal