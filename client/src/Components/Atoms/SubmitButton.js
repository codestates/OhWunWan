import styled from "styled-components"

// 메뉴버튼으로 채택 수정 삭제 취소 

const Button = styled.span`
  /* border: 0.1em solid #000; */
  border-radius: 0.3em;
  user-select: none; // 드래그 금지
  display:inline-block;
  color: ${props => props.type === 'blue' ? '#2D9BF0' : 
  props.type === 'red' ? '#F24726' :
  props.type === 'black' ? '#000' : 
  props.type === 'skyblue' ? '#2d9bf0':"#fff"};
  padding: ${props => props.type === 'comment' ? 'none' : '0.1em;'};
  cursor: pointer;
`

SubmitButton.defaultProps = {
  text: '게시',
  type: "comment",
  onClick: () => {console.log('제출 버튼 동작')}
}

function SubmitButton({text, type, onClick,}) {
  return(
    <Button onClick={()=>onClick()} type={type}>{text}</Button>
  )
}

export default SubmitButton