import styled from "styled-components"

// 1rm 페이지 
// 게시글 위에 있는 벤치프레스, 데드리프트, 스쿼트 필터링 버튼

const Button = styled.span`
  user-select: none; // 드래그 금지
  cursor: pointer;
  width: 6em;
  color: ${props => props.select === 'select' ? '#2D9BF0' : '#000'};
  text-align: center;
  font-weight: bold;
`

function OnermCategory({subject, select, onClick}) {
  return (
    <Button select={select} onClick={onClick}>{subject}</Button>
  )
}

export default OnermCategory