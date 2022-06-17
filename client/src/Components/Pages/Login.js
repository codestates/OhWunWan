import styled from "styled-components"
import { Fragment } from "react";
import STYLE from "../../config";

import FooterBlock from "../Organism/FooterBlock";
import Logo from "../Atoms/Logo";
import OauthButton from "../Atoms/OauthButton";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Box = styled.div`
  width: 30em;
  height: 30em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5em;
`

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`

const MarginBox = styled.div`
`

function Login() {
  return(
    <Fragment>
      <Wrap>
        <MarginBox />
        <Box>
          <FlexBox>
            <Logo width='15em'/>
            <OauthButton />
          </FlexBox>
        </Box>
        <FooterBlock />
      </Wrap>
    </Fragment>
  )
}

export default Login