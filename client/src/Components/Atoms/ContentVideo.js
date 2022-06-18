import styled from "styled-components"
import STYLE from "../../config"
import { useRef, useEffect } from 'react'

// 게시글 동영상 들어가는 부분

const Video = styled.video`
  width: ${STYLE.WIDTH};
`

const Source = styled.source`
`

function ContentVideo({video}) {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current ?.load()
  }, [video])
  
  return (
    <Video ref={videoRef} controls>
      <Source src={video} />
    </Video>
  )
}

export default ContentVideo