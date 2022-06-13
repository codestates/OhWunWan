import styled from "styled-components"

// 글 작성 버튼 => 글 카테고리 선택 버튼 => 해당 카테고리 이동

const Button = styled.span`
  width: 3em;
  text-align: center;
  border: none;
  border-radius: 0.3em;
  padding: 0.2em;
  user-select: none; // 드래그 금지
  display:inline-block;
  color: #fff;
  padding: 0.1em;
  background-color: #2D9BF0;
  cursor: pointer;
`

function PostCategoryButton({text}) {
  return(
    <Button>{text}</Button>
  )
}

export default PostCategoryButton