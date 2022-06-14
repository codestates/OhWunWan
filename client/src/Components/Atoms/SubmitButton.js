import styled from "styled-components"

// 메뉴버튼으로 수정 삭제 취소

const Button = styled.span`
  /* border: 0.1em solid #000; */
  border-radius: 0.3em;
  user-select: none; // 드래그 금지
  display:inline-block;
  color: ${props => props.type === 'comment' ? '#2D9BF0' : 
  props.type === 'red' ? '#F24726' :
  props.type === 'black' ? '#000' : '#fff'};
  padding: ${props => props.type === 'comment' ? 'none' : '0.1em;'};
  background-color: ${
    props => props.type === 'comment' ? 'none' : 
    props.type === 'black' ? 'none' : 
    props.type === 'red' ? 'none' : 
    props.type === 'content' ? '#2D9BF0' :
    props.type === 'nickname' ? '#2D9BF0' : '#F24726'
  };
  cursor: pointer;
`

SubmitButton.defaultProps = {
  text: '게시',
  type: "comment",
  onClick: () => {console.log('제출 버튼 동작')}
}

function SubmitButton({text, type, onClick, color}) {
  return(
    <Button onClick={onClick} type={type} color={color} >{text}</Button>
  )
}

export default SubmitButton