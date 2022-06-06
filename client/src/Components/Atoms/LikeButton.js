import styled from "styled-components"
// import Like from "../Picture/love.png"
import { useSelector, useDispatch } from "react-redux";
import { like } from "../../Ducks/Slice/LikeSlice"

const Button = styled.div`
  width: 3em;
  height: 3em;
  border: 1px solid black;
`

LikeButton.defaultProps = {
  like_plus: () => console.log('like')
}


function LikeButton ({like_plus}) {
  let select = useSelector(state => state.like)
  const dispatch = useDispatch()

  return (
    <Button onClick={() => {dispatch(like(1), console.log(select))}}></Button>
  )
} 

export default LikeButton