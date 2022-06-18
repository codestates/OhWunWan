import styled from "styled-components"
import { Fragment, useState } from "react";
import STYLE from "../../config";

// Organism
import FooterBlock from "../Organism/FooterBlock";
import LoginModal from "../Organism/LoginModal";

// Atoms
import WelcomePicture from "../Atoms/WelcomePicture";
import Logo from "../Atoms/Logo"
import WelcomeText from "../Atoms/WelcomeText";

// pic
import pic1 from "../Picture/Welcome/1.jpg"
import pic2 from "../Picture/Welcome/2.jpg"
import pic3 from "../Picture/Welcome/3.jpg"
import pic4 from "../Picture/Welcome/4.jpg"

const Wrap = styled.div`
  width: ${STYLE.WELCOME};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FlexBox = styled.div`
  width: ${STYLE.WELCOME};
  height: 30em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border-radius: 1.5em; */
  margin-top: 2em;
`

const FlexBox2 = styled.div`
  width: ${STYLE.WELCOME};
  /* height: 10em; */
  /* border: 0.1em solid ${STYLE.BORDER_COLOR}; */
  display: flex;
  align-items: center;
  margin-top: 2em;
`

const Box1 = styled.div`
  width: 40em;
  height: 28em;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  border-right: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Box2 = styled.div`
  width: 40em;
  height: 28em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
`

const MarginBox = styled.div`
  height: 2em;
`

const LoginButton = styled.span`
  font-size: 1.5em;
  margin-top: 1em;
  :hover {
    color: #2DA44E;
  }
  cursor: pointer;
  font-weight: bold;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
  padding: 0.5em 1em;
`

const Text = styled.div`
  font-size: 1.2em;
`

const FlexBox3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Welcome() {
  const [isLoginModal , setIsLoginModal] = useState(false)

  return(
    <Fragment>
      <Wrap>
        <LoginModal isLoginModal={isLoginModal} />

        <FlexBox>
          <Logo width='30em' />
          <LoginButton onClick={() => setIsLoginModal(!isLoginModal)}>오운완 서비스 시작</LoginButton>
        </FlexBox>

        <FlexBox2>
          <Box1>
            <WelcomePicture img={pic3} flex="40em" height="28em" />
          </Box1>

          <Box2>
            <WelcomeText text="Share" />
            <FlexBox3>
              <Text>운동을 완료하고, 오운완 게시판에서 인증을 시작하세요</Text>
              <Text>매일 운동하는 습관을 기르는데 도움이 됩니다.</Text>
            </FlexBox3>
            <MarginBox />
          </Box2>

        </FlexBox2>

        <FlexBox2>
          <Box1>
            <WelcomeText text="Challenge" />
            <FlexBox3>
              <Text>자신의 한계를 도전해보시는건 어떠신가요?</Text>
              <Text>1RM 게시판에서 랭킹 시스템을 통해 다른 사람과도 경쟁해보세요.</Text>
            </FlexBox3>
            <MarginBox />
          </Box1>

          <Box2>
            <WelcomePicture img={pic2} flex="40em" height="28em" />
          </Box2>
        </FlexBox2>
        
        <FlexBox2>
          <Box1>
            <WelcomePicture img={pic4} flex="40em" height="28em" />
          </Box1>

          <Box2>
            <WelcomeText text="Communicate" />
            <FlexBox3>
              <Text>운동하는데 어려움을 겪고 있으시진 않으신가요?</Text>
              <Text>피드백 게시판에서 다른 유저에게 질문해보세요.</Text>
            </FlexBox3>
            <MarginBox />
          </Box2>
  
        </FlexBox2>
        
        <FooterBlock />
      </Wrap>
    </Fragment>
  )
}

export default Welcome