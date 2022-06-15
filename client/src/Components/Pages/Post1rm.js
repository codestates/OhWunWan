import styled from "styled-components"
import { Fragment, useState } from "react";
import STYLE from "../../config";
import { useSelector } from 'react-redux';

// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";

// Atoms
import PostSubject from "../Atoms/PostSubject";
import PostSubmit from "../Atoms/PostSubmit";
import PostInput from "../Atoms/PostInput";
import PostUpload from "../Atoms/PostUpload";
import PostMenu from "../Atoms/PostMenu";
import PostSelect from "../Atoms/PostSelect";
import PostInput2 from "../Atoms/PostInput2";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const BetweenBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`

function Post1rm() {
  
  const user_info = useSelector((state)=> state.auth.user_info)
  const copied = JSON.parse(JSON.stringify(user_info))
  const [text_content,setText_content] = useState('')
  const [video, setVideo] = useState('')
  const [fitness, setFitness] = useState('')
  const [weight, setWeight] = useState('')

  const formdata = new FormData()

  const textHandler = (value) => {
    setText_content(value)
  }   
  
  const videoHandler = (value) => {
    setVideo(value)
  }

  const selectFitness = (value) => {
    setFitness(value)
  }

  const weightHandler = (value) => {
    setWeight(value)
  }

  console.log(fitness)
  // console.log(weight)
  formdata.append('user_id', copied.id)
  formdata.append('text_content', text_content)  
  formdata.append('kg',weight)
  formdata.append('file', video)
    
  return(
    <Fragment>
      <Wrap>
        <HeaderBlock />
        <MarginBox />
        
        <BetweenBox>
          <PostSubject text='' />
          <PostSubject text='1RM' />
          <PostSubmit formdata={formdata} url={selectFitness} replace={"1rm"}/>
        </BetweenBox>

        <BetweenBox>
          <PostInput textHandler={textHandler}/>
          <PostUpload videoHandler={videoHandler}/>
        </BetweenBox>

        <BetweenBox>
          <PostMenu text='종목선택' />
          <PostSelect selectFitness={selectFitness}/>
        </BetweenBox>

        <BetweenBox>
          <PostMenu text='1RM' />
          <FlexBox>
            <PostInput2 weightHandler={weightHandler}/>
            <PostMenu text='KG' />
          </FlexBox>
        </BetweenBox>

      </Wrap>
    </Fragment>
  )
}

export default Post1rm