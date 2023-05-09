import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { deleteSpotThunk, getSpotThunk } from "../../store/spots"


const SpotShow=()=>{
    const dispatch=useDispatch()
    const {spotId}= useParams()
    const spot = useSelector(state=>state.spots[spotId])
    // console.log("jhfjhggh",spot,"ssadasdaad")

    useEffect(()=>{
        dispatch(getSpotThunk(spotId))
    },[dispatch,spotId])
    
    // const handleDelete=e=>{
    //     e.preventDefault();
    //     dispatch(deleteSpotThunk())
    // }

    //conditional render until spot is not undefined. initial render is undefined
    if(!spot){
        return null
    }
    return (
        <>
    <h2>{spot.name}</h2>
    <p>{spot.address},{spot.city}{spot.avgStarRating}{spot.country}{spot.price}</p>
        <p>SINGLEE SPOT</p>
        </>
    )
}

export default SpotShow