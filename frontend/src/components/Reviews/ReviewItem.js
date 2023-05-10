import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {useParams} from "react-router-dom"
const ReviewIndexItem =()=>{
    const dispatch=useDispatch();
    const {spotId}= useParams()
    const spot = useSelector(state=>state.spots[spotId])
console.log(spot)

}
export default ReviewIndexItem