import styled from "styled-components"
import { Fragment, useState } from "react"

// 게시글 - 댓글 내용, 시간
// comment 타임 삭제

const Content = styled.span`
  margin-left: 2.2em;
`

const Time = styled.span`
  background-color: #000;
  color: #fff;
  position: absolute;
  margin-left: 35.3em;
  user-select: none; // 드래그 방지
`

Comment.defaultProps = {
  text: '텍스트가 들어갈 자리입니다',
  time: "2022-06-05 11:08:08"
}

function Comment({text, time}) {
  const [hover, SetHover] = useState(false)
  
  return (
    <Fragment>
      <Content 
        onMouseOver={() => SetHover(true)}
        onMouseOut={() => SetHover(false)}
        >{text}
      </Content>
      {hover? <Time>{time}</Time> : null}
    </Fragment>
  )
}

export default Comment