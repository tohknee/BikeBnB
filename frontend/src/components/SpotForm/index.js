import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addSpotThunk, editSpotThunk } from "../../store/spots";
import "./spotform.css"

const SpotForm = ({ spot, formType }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [country, setCountry] = useState(spot?.country);
  const [address, setAddress] = useState(spot?.address);
  const [city, setCity] = useState(spot?.city);
  const [state, setState] = useState(spot?.state);
  const [description, setDescription] = useState(spot?.description);
  const [name, setSpotName] = useState(spot?.name);
  const [price, setPrice] = useState(spot?.price);
  // const [imageUrl, setImageUrl] = useState(spot?.imageUrl);
  const [lat, setLat] = useState(1);
  const [lng, setLng] = useState(1);
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const [url4, setUrl4] = useState("");
  const [url5, setUrl5] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    spot = {
      ...spot,
      country,
      address,
      city,
      state,
      description,
      name,
      price,
      // imageUrl,
      lat,
      lng,
      SpotImages: [
        { preview: true, url: url1 },
        { preview: false, url: url2 },
        { preview: false, url: url3 },
        { preview: false, url: url4 },
        { preview: false, url: url5 },
      ],
      
    };

    if (formType === "Create a New Spot") {
      const spotData = await dispatch(addSpotThunk(spot));
      if (spotData.errors) {
        //check if there is errros.
        return setErrors(spotData.errors); //populate with errors
      }
      history.push(`/spots/${spotData.id}`); //redirect to spot id
    }
    if (formType === "Update your spot") {
      const spotData = await dispatch(editSpotThunk(spot));
      history.push(`/spots/${spotData.id}`); // redirect to edit spot
      if (spotData.errors) {
        return setErrors(spotData.errors);
      }
    }
  };
 //check if ends in jpg jpeg png. use as ternary to return error
 const urls=[url1,url2,url3,url4,url5]
  const urlChecker=(url)=>{
    const endings=['.jpg','.jpeg', '.png']
    for (let i=0; i<endings.length;i++){
      if(url.endsWith(endings[i])){
        return true
      }
    }
    return false
  }

  const imageCheck = e=>{
    const url=e.target.value;
    if (!url.endsWith(".jpg") && !url.endsWith(".png") && !url.endsWith(".jpeg")){
      return true
    }else{
      return false
    }

  }
  return (
    <div className="form-container">

    <form  className="submit-form" onSubmit={handleSubmit}>
      <h2>{formType}</h2>
      <h3>Where's your place located?</h3>
      <p>Guests will only get your exact adress once they booked a reservation.</p>
      <p className="error-text">{errors.country}</p>
      <label className="input-label">
        Country
        <input
        className="input-box"
          type="text"
          value={country}
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
          ></input>
      </label>
      <label className="input-label">
        <div className="error-text">{errors.address}</div>
        Street Address
        <input
        className="input-box"
          type="text"
          value={address}
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
          ></input>
      </label>
      <div className="together-div">
        <label className="input-label">
          <div className="error-text">{errors.city}</div>
          City
          <input
          className="dual-input"
            type="text"
            value={city}
            placeholder="city"
            onChange={(e) => setCity(e.target.value)}
            ></input>
        </label>
        
        <label className="input-label">
          <div className="error-text">{errors.state}</div>
          State
          <input
          className="dual-input"
            type="text"
            value={state}
            placeholder="State"
            onChange={(e) => setState(e.target.value)}
            ></input>
        </label>
      </div>
      {/* <div>
        <label>
        Latitude
        <input
        type="text"
        value={lat}
        placeholder="Latitude"
        onChange={(e) => setLat(e.target.value)}
        ></input>
        </label>
        ,
        <label>
        Longitude
        <input
        type="text"
        value={lng}
        placeholder="Longitude"
        onChange={(e) => setLng(e.target.value)}
        ></input>
        </label>
      </div> */}
      <hr className="line"></hr>
      <h2>Describe your place to guests</h2>
      <label className="input-label">Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.</label>
      <div className="error-text">{errors.description}</div>
      <textarea
      rows={5}
      cols={50}
        type="text"
        value={description}
        placeholder="Please write at least 30 characters."
        onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      <h2>{formType} Title </h2>
      <label className="input-label">Catch guest's attention with a spot title that highlights what makes your place special.</label>
      <div className="error-text">{errors.name}</div>
      <input
      className="input-box"
        type="text"
        value={name}
        placeholder="Name of your spot"
        onChange={(e) => setSpotName(e.target.value)}
        ></input>
      <hr className="line"></hr>
      <h2>Set a base price for your spot</h2>
      <label className="input-label">Competitive pricing can help your listing stand out and rank higher in search results.</label>
      <div className="error-text">{errors.price}</div>$
      <input
      className="input-box"
        type="text"
        value={price}
        placeholder="Price per night (usd)"
        onChange={(e) => setPrice(e.target.value)}
        ></input>
<hr></hr>
    {formType==="Create a New Spot" &&(
      <>
      <h2>Liven up your spot with photos</h2>
      <label className="input-label">Submit a link to at least one photo to publish your spot.</label>
      {!url1 &&(<div className="error-text">Preview image is required.</div>)}
      <div>
        {imageCheck &&<p>erRRORS</p>}
      </div>
      <input
       className="url-input"
      type="text"
      value={url1}
      placeholder="Preview Image URL"
      onChange={(e) => setUrl1(e.target.value)}
      ></input>
      <input
      type="text"
      className="url-input"
      value={url2}
      placeholder="Image URL"
      onChange={(e) => setUrl2(e.target.value)}
      
      onBlur={imageCheck}
      
      
      ></input> 
      <input
      type="text"
      className="url-input"
      value={url3}
      placeholder="Image URL"
      onChange={(e) => setUrl3(e.target.value)}
      ></input>
      <input
      type="text"
      className="url-input"
      value={url4}
      placeholder="Image URL"
      onChange={(e) => setUrl4(e.target.value)}
      ></input>
      <input
      type="text"
      className="url-input"
      value={url5}
      placeholder="Image URL"
      onChange={(e) => setUrl5(e.target.value)}
      ></input>
      </>
      )}
      <hr></hr>
      <input type="submit" value={formType}></input>
    </form>
    
      </div>
  );
};

export default SpotForm;
