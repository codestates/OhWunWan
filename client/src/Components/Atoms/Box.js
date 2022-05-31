import styled from "styled-components";

const CommentBox = styled.div`
  width: 500px;
  height: ${props => props.post_cafegory: "100px" ? "300px"};
  border: 1px solid #000;
`

atoms 

1번 // 포스트 카테고리 : 100px; <= atoms
2번 // 댓글 div: 300px; <= atoms

postpage 단위에서 Blocks 사용
<CommentBox post_cafegory>
  <atoms>
  <atoms>
  <atoms>
</CommentBox>