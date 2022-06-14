import styled from "styled-components"

// 피드백 페이지 
// 게시글 위에 있는 전체 게시글, 미채택 게시물, 채택 게시물 버튼

const Button = styled.span`
  user-select: none; // 드래그 금지
  cursor: pointer;
  width: 6em;
  color: ${props => props.select === 'select' ? '#2D9BF0' : '#000'};
  text-align: center;
  font-weight: bold;
`

function FeedbackCategory({subject, select, onClick}) {
  return (
    <Button select={select} onClick={onClick}>{subject}</Button>
  )
}

export default FeedbackCategory