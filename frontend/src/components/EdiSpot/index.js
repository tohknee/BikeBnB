import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {getSpotThunk} from '../../store/spots'

const EditSpot = ()=>{
    const dispatch=useDispatch()
    const {spotId} = useParams()
    
    const spot = useSelector(state=>state.spots[spotId])
    console.log('spoot',spot)//undefined
    useEffect(()=>{
        dispatch(getSpotThunk(spotId))
    },[dispatch,spotId])
    if(!spot) return null;
    return (
        <>
        <p>EDIT SPOT</p>
        </>
    )
}
export default EditSpot