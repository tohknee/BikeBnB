import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { getSpotThunk } from "../../store/spots"
import createSpot from "../CreateSpotForm"


const SpotForm=({spot, formType})=>{
    const dispatch=useDispatch()
    const history=useHistory()
    const[country,setCountry]=useState(spot?.country)
    const[address,setAddress]=useState(spot?.address)
    const[city,setCity]=useState(spot?.city)
    const[state,setState]=useState(spot?.state)
    const[description,setDescription]=useState(spot?.description)
    const[spotName,setSpotName]=useState(spot?.spotName)
    const[price,setPrice]=useState(spot?.price)
    const[previewImageUrl,setPreviewImageUrl]=useState(spot?.previewImageUrl)
    const[imageUrl,setImageUrl]=useState(spot?.imageUrl)
    const [lat,setLat]=useState(spot?.lat)
    const [lng,setLng]=useState(spot?.lng)

    //do later
    const handleSubmit = e =>{
        e.preventDefault();
        spot = {...spot, country, address,city,state,description,spotName,price,previewImageUrl,imageUrl}
        dispatch(getSpotThunk(spot))

        if(formType==="Create Spot"){
            dispatch(createSpot(spot))
        }
        // if(formType===)

        history.push(`/`)
    }
    return (
        <form>
            <h2>{formType}</h2>
            <h3>Wheres your place located</h3>
            <p>Guests will only get your exact adress once</p>
            <label>Country
                <input
                type="text"
                value={country}
                placeholder="Country"
                onChange={e=>setCountry(e.target.value)}
                ></input>
            </label>
            <label>
                Street address
                <input
                type="text"
                value={address}
                placeholder="Address"
                onChange={e=>setAddress(e.target.value)}
                ></input>
            </label>
            <div>
                <label>
                    City
                    <input
                    type="text"
                    value={city}
                    placeholder="city"
                    onChange={e=>setCity(e.target.value)}>
                    </input>
                </label>,
                <label>
                    State
                    <input
                    type="text"
                    value={state}
                    placeholder="State"
                    onChange={e=>setState(e.target.value)}></input>
                </label>
            </div>
            <div>
                <label>
                    Latitude
                    <input
                    type="text"
                    value={lat}
                    placeholder="Latitude"
                    onChange={e=>setLat(e.target.value)}></input>
                </label>,
                <label>
                    Longitude
                    <input
                    type="text"
                    value={lng}
                    placeholder="Longitude"
                    onChange={e=>setLng(e.target.value)}></input>
                </label>

            </div>
            <h2>Describe your place to Guests</h2>
            <p>Mention the best features of your space any special amenities</p>
            <textarea
            type="text"
            value={description}
            placeholder="please write atleast 30 character"
            onChange={e=>setDescription(e.target.value)}></textarea>
            <h2>Create a title for your spot</h2>
            <p>catch Guests attention with a spot title that hihglights</p>
            <input 
            type="text"
            value={spotName}
            placeholder="name of spot"
            onChange={e=>setSpotName(e.target.value)}>
            </input>
            <h2>Set a base price for your spot</h2>
            $<input
            type="text"
            value={price}
            placeholder="Price per night (usd)"
            onChange={e=>setPrice(e.target.value)}
            ></input>
            <h2>Liven up your spot with photos</h2>
            <p>Submit a link to atleast one photo to publish your spot</p>
            <input
            type="text"
            value={previewImageUrl}
            placeholder="Preview Image url"
            onChange={e=>setPreviewImageUrl(e.target.value)}
            ></input>
            <input
            type="text"
            value={imageUrl}
            placeholder="Image url"
            onChange={e=>setImageUrl(e.target.value)}>
            </input>
            <input
            type="text"
            value={imageUrl}
            placeholder="Image url"
            onChange={e=>setImageUrl(e.target.value)}>
            </input>
            <input
            type="text"
            value={imageUrl}
            placeholder="Image url"
            onChange={e=>setImageUrl(e.target.value)}>
            </input>
        </form>
    )
}

export default SpotForm;