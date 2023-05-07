import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSpotThunk } from "../../store/spots"


const SpotShow=()=>{
    const dispatch=useDispatch()
    const {spotId}= useParams()
    const spot = useSelector(state=>state.spots[spotId])
    console.log(spot,"ssadasdaad")
    useEffect(()=>{
        dispatch(getSpotThunk(spotId))
    },[dispatch,spotId])
    // console.log(spot,'asdasdasdasd') spot is undefined. fix this
    return (
        <>

        <p>SINGLEE SPOT</p>
        </>
    )
}

export default SpotShow