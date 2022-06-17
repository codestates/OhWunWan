import styled from "styled-components"

// 게시글 좋아요, 댓글 갯수 옆 게시글 작성 시간

const Time = styled.span`
  font-size: 1em;
  background-color: ${props => props.subject === "comment" ? "#000" : "#fff" };
  color: ${props => props.subject === "comment" ? "#fff" : "#000"};
  margin-right: 0.2em;
`

ContentTime.defaultProps = {
  time: "2022-06-05 11:08:08",
  subject: "post"
}

function ContentTime({time, subject}) {
  return (
    <Time subject={subject}>{time}</Time>
  )
}

export default ContentTime