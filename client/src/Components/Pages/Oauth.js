import styled from "styled-components";
import Loding from "../Atoms/Loding";
import { useEffect } from 'react';
import axios from 'axios';

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
`

function Oauth() {
  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code')
    // console.log(code)
    axios.post('https://localhost:4000/auth/kakao',{code}).then((result)=>console.log(result))
  }, [])

  return(
    <Div>
      <Loding />
    </Div>
  )
}

export default Oauth