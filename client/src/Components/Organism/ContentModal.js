import styled from "styled-components";
import { Fragment } from "react";
import STYLE from "../../config"
import SubmitButton from "../Atoms/SubmitButton"
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SendPostInfo } from '../../Ducks/Slice/EditSlice';

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

function ContentModal({setContentMenu,category,postInfo}) {
  // 리덕스에 저장된 유저 정보 가져오기 
  const user_info = useSelector((state)=>state.auth.user_info)
  const dispatch = useDispatch()
  //console.log("컨텐츠 모달이 전달받은 유저 정보:",user_info)  
  //console.log(postInfo)

  const editHandler = () => {
    // axios.patch(`${STYLE.SERVER}/post/${category}/${postingId}`,)
    // .then((res)=>{window.location.replace(`${STYLE.CLIENT}/post/${category === "bench_1rm" ? "1rm" : category ==="dead_1rm" ? "1rm" : category === "sqaut_1rm" ? "1rm" :category }`)})
  }
  
  const deleteHandler = () => {
    axios.delete(`${STYLE.SERVER}/post/${category}/${postInfo.id}`)
    .then((res)=>{window.location.replace(`${STYLE.CLIENT}/${category === "bench_1rm" ? "1rm" : category ==="dead_1rm" ? "1rm" : category === "sqaut_1rm" ? "1rm" :category }`)})
    .catch((err)=>console.log(err))
  }

  return(
    <Fragment>
      <Div>
        <Div2>
          <Link to={`/post/${category === "bench_1rm" ? "1rm/edit" : category ==="dead_1rm" ? "1rm/edit" : category === "sqaut_1rm" ? "1rm/edit" :category+"/edit" }`}>
          <SubmitButton text='수정' type='skyblue' onClick={()=>{dispatch(SendPostInfo(postInfo))}}/>
          </Link>
        </Div2>
        <Div2>
          <SubmitButton text='삭제' type='red' onClick={deleteHandler}/>
        </Div2>
        <Div2>
          <SubmitButton text='취소' type='black' onClick={() => {setContentMenu(false)}} />
        </Div2>
      </Div>
    </Fragment>
  )
}

export default ContentModal