import styled from "styled-components"
import { Fragment } from "react"

// 포스팅 페이지 (1RM) => 종목선택창 (벤치프레스, 데드리프트, 스쿼트)

const Select = styled.select`
  width: 6em;
  font-size: 1em;
`

// function change() {
//   const workout_select = document.getElementById("selectbox")
//   const select_text = workout_select.options[workout_select.selectedIndex].text
//   console.log(select_text)
// }

function PostSelect({selectFitness,category}) {
  return(
    <Fragment>
      <Select id='selectbox'  defaultValue="select" onChange={(e) => selectFitness(e.target.value)}>
        <option value="select" disabled>종목선택</option>
        <option value="bench_1rm">벤치프레스</option>
        <option value="dead_1rm">데드리프트</option>
        <option value="squat_1rm">스쿼트</option>
      </Select>
    </Fragment>
  )
}

export default PostSelect