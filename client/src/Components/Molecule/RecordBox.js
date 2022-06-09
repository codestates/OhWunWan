import styled from "styled-components";
import STYLE from "../../config";
import PostCategory from "../Atoms/PostCategory"
import Rank from "../Atoms/Rank";

const Div = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  padding: 0.4em 0;
`

const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
`

const Div3 = styled.div`
  width: 6em;
  display: flex;
  align-items: center;
  justify-content: center;
`

function RecordBox() {
  return (
    <Div>
      <Div2>
        <PostCategory subject='벤치프레스' />
        <PostCategory subject='데드리프트' />
        <PostCategory subject='스쿼트' />
      </Div2>
      <Div2>
        <Div3>
          <Rank record='40' type='rank' />
          <Rank record='/' />
          <Rank record='61' />
        </Div3>
        <Div3>
          <Rank record='50' type='rank' />
          <Rank record='/' />
          <Rank record='74' />
        </Div3>
        <Div3>
          <Rank record='65' type='rank' />
          <Rank record='/' />
          <Rank record='82' />
        </Div3>
      </Div2>
      <Div2>
        <Div3>
          <Rank record='20' type='weight' />
          <Rank record='kg' />
        </Div3>
        <Div3>
          <Rank record='35' type='weight' />
          <Rank record='kg' />
        </Div3>
        <Div3>
          <Rank record='30' type='weight' />
          <Rank record='kg' />
        </Div3>
      </Div2>
    </Div>
  )
}

export default RecordBox