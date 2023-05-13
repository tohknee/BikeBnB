import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addSpotThunk, editSpotThunk } from "../../store/spots";

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
  const [imageUrl, setImageUrl] = useState(spot?.imageUrl);
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
  // const urlChecker =(url)=> {
  //     const imageType = ['.jpg', '.png']
  //     const urlCopy=url.substring(url.lastIndexOf('.'))
  //     return imageType.includes(urlCopy)
  // }
  // const hnadleImageChange=e=>{
  //     const url = e.target.value
  //     if(!urlChecker(url)){
  //         setErrors({imageUrl:"image must end with .jpg or .png"})
  //     }else{
  //         setErrors({})
  //     }
  //     setImageUrl(url)
  // }
  return (
    <form onSubmit={handleSubmit}>
      <h2>{formType}</h2>
      {console.log("spot errrrooors", errors)}
      <h3>Where's your place located?</h3>
      <p>Guests will only get your exact adress once they booked a reservation.</p>
      <p className="error-text">{errors.country}</p>
      <label>
        Country
        <input
          type="text"
          value={country}
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
        ></input>
      </label>
      <label>
        <div className="error-text">{errors.address}</div>
        Street Address
        <input
          type="text"
          value={address}
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        ></input>
      </label>
      <div>
        <label>
          <div className="error-text">{errors.city}</div>
          City
          <input
            type="text"
            value={city}
            placeholder="city"
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </label>
        ,
        <label>
          <div className="error-text">{errors.state}</div>
          State
          <input
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
      <h2>Describe your place to guests</h2>
      <p>Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.</p>
      <div className="error-text">{errors.description}</div>
      <textarea
        type="text"
        value={description}
        placeholder="Please write at least 30 characters."
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <h2>{formType} Title </h2>
      <p>Catch guest's attention with a spot title that highlights what makes your place special.</p>
      <div className="error-text">{errors.name}</div>
      <input
        type="text"
        value={name}
        placeholder="Name of your spot"
        onChange={(e) => setSpotName(e.target.value)}
      ></input>
      <h2>Set a base price for your spot</h2>
      <p>Competitive pricing can help your listing stand out and rank higher in search results.</p>
      <div className="error-text">{errors.price}</div>$
      <input
        type="text"
        value={price}
        placeholder="Price per night (usd)"
        onChange={(e) => setPrice(e.target.value)}
      ></input>

    {formType==="Create a New Spot" &&(
      <>
      <h2>Liven up your spot with photos</h2>
      <p>Submit a link to at least one photo to publish your spot.</p>
      {/* <div className="error-text">{errors.}</div> */}
      <input
      type="text"
      value={url1}
      placeholder="Preview Image URL"
      onChange={(e) => setUrl1(e.target.value)}
      ></input>
      <input
      type="text"
      value={url2}
      placeholder="Image URL"
      onChange={(e) => setUrl2(e.target.value)}
      ></input>
      <input
      type="text"
      value={url3}
      placeholder="Image URL"
      onChange={(e) => setUrl3(e.target.value)}
      ></input>
      <input
      type="text"
      value={url4}
      placeholder="Image URL"
      onChange={(e) => setUrl4(e.target.value)}
      ></input>
      <input
      type="text"
      value={url5}
      placeholder="Image URL"
      onChange={(e) => setUrl5(e.target.value)}
      ></input>
      </>
      )}
      <input type="submit" value={formType}></input>
    </form>
  );
};

export default SpotForm;
