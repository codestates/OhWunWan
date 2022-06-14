import styled from "styled-components";
import { Fragment, useState } from "react";
import STYLE from "../../config";
import {useSelector, useDispatch} from "react-redux" 
import { OhwunwanText, OhwunwanImage } from '../../Ducks/Slice/PostSlice'


// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";
import Posting from '../Organism/Posting';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

function OhWunWan() {
  // const [modalOpen, setModalOpen] = useState(true)

  // const openModal = () => {
  //   setModalOpen(true)
  //   console.log(modalOpen)
  // }

  // const closeModal = () => {
  //   setModalOpen(false)
  //   console.log(modalOpen)
  // }

  return(
    <Fragment>
      <Wrap>
        {/* <MenuBox /> */}
        <HeaderBlock />
        <MarginBox />
        {<Posting></Posting>}
      </Wrap>
    </Fragment>
  )
}

export default OhWunWan