import {useState,useEffect} from 'react'
import './ReviewRating.css'
///prop passed in from review form 
const StarRatingInput = ({ stars, disabled, onChange }) => {
const [activeRating, setActiveRating]= useState(stars)

//add effect so if rating changes, filled paw icons also update to reflect new rating value
useEffect(()=>{
  setActiveRating(stars)
},[stars])//if rating changes trigger useEffect

//set rating to current rating+1 and so on but dont xhange the actual rating
const handleMouseEnter =index=>{
  if(!disabled){//if disable is not true then mouse over event listner will run

    setActiveRating(index+1)//because index starts at 0 we need to add 1 to match rating 1-5
  }
}

//set rating back to current when mouse leave
const handleMouseLeave=()=>{
  if(!disabled){
    setActiveRating(stars)
  }
}
//handle the click of the paws index value to set rating value
const handleClick = index=>{
  if(!disabled){
    onChange(index+1)
  }
}

//render paws.
  const starRating=[] //make array of rating tags. then input below
  for(let index=0; index<5; index++){//loop to only make 5 
    const className= index<activeRating ? 'filled': 'empty'//if current index less than rating. classname=filled. if over its empty
    starRating.push(
      <div key={index}
      className={className}
      onMouseEnter={()=>handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      onClick={()=>handleClick(index)}//add onClick listener that calls handleClick
      >
        <i className='fa fa-paw'></i>
      </div>
    )
  }

  return (
    <>
    <input
      type="number"
      disabled={disabled}
      value={stars}
      onChange={onChange}
      />
    <div className='rating-input'>{starRating}</div>
      </>
  );
};

export default StarRatingInput;