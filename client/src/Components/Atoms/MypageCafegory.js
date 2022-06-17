import styled from "styled-components"

// 마이페이지 
// 게시글 위에 있는 오운완, 벤치프레스, 데드리프트, 스쿼트, 피드백 필터링 버튼

const Button = styled.span`
  user-select: none; // 드래그 금지
  cursor: pointer;
  width: 6em;
  color: ${props => props.select === 'select' ? '#2D9BF0' : '#000'};
  text-align: center;
  font-weight: bold;
`

function MypageCafegory({subject, select, onClick}) {
  return (
    <Button select={select} onClick={onClick}>{subject}</Button>
  )
}

export default MypageCafegory