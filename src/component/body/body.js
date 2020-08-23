import React from "react"
import Crousal from "./crousal/crousal"
import MultiSlider from "../body/multiSlider/elecreonic"
import AllItem from "./all-item/allitem"

const Body=(props)=>{

  return(
    <div className="bg-dark">
      <Crousal/>
      <AllItem everyItem={props.allItem}
      addToCart={props.addToCart}
      />
      <MultiSlider multiSliderItem={props.allItem}/>
    </div>
  )
}
export default Body 