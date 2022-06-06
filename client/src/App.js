import React, { Fragment } from 'react';
import { useSelector, useDispatch }  from 'react-redux';
import styled from "styled-components";
import CommentInputBox from './Components/Molecule/CommentInputBox';

function App() {
  return (
    <Fragment>
      <CommentInputBox>
      </CommentInputBox>
    </Fragment>
  );
}

export default App;
