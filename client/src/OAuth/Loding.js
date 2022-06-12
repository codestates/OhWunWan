import axios from "axios";

// 서버로 인가 코드 보내주기
const CodeToServer = async(code) => {
  await axios.get('http://localhost:4000/authserver', {
    params: {
      code: code
    }
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
}

function Loding() {
  // URL에 있는 인가 코드 가져오기
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code)

  CodeToServer(code)

  return (
    <p>로그인 중입니다.</p>
  )
}

export default Loding