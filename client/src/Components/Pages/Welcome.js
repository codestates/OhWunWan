import styled from "styled-components"
import { Fragment } from "react";
import STYLE from "../../config";

import FooterBlock from "../Organism/FooterBlock";
import LoginButton from "../Atoms/LoginButton";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const FlexBox = styled.div`
  width: 30em;
  height: 30em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5em;
`

const MarginBox = styled.div`
`

function Welcome() {
  return(
    <Fragment>
      <Wrap>
        <MarginBox />
        <FlexBox>
          <LoginButton />
        </FlexBox>
        <FooterBlock />
      </Wrap>
    </Fragment>
  )
}

export default Welcome