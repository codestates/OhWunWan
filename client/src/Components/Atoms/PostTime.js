import styled from "styled-components"

// 게시물 시간

const Time = styled.span`
  font-size: 1em;
  background-color: ${props => props.subject === "comment" ? "#000" : "#fff" };
  color: ${props => props.subject === "comment" ? "#fff" : "#000"};
  margin-right: 0.2em;
`

PostTime.defaultProps = {
  time: "2022-06-05 11:08:08",
  subject: "post"
}

function PostTime({time, subject}) {
  return (
    <Time subject={subject}>{time}</Time>
  )
}

export default PostTime