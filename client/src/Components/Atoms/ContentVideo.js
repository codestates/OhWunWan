import styled from "styled-components"
import STYLE from "../../config"

// 게시글 동영상 들어가는 부분

const Video = styled.video`
  width: ${STYLE.WIDTH};
`

const Source = styled.source`
`

function ContentVideo({video}) {
  return (
    <Video controls>
      <Source src={video} />
    </Video>
  )
}

export default ContentVideo