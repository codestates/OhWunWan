import styled from "styled-components"

const Select = styled.select`
  width: 6em;
  font-size: 1em;
`

function PostSelect() {
  return(
    <Select>
      <option value="">종목선택</option>
      <option value="bench">벤치프레스</option>
      <option value="dead">데드리프트</option>
      <option value="squt">스쿼트</option>
    </Select>
  )
}

export default PostSelect