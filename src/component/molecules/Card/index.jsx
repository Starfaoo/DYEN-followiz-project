import React from "react";
import { Text , Icons } from "../../atoms";



export const Card = (props) => {
const{type} = props
    
    

        if ( type === "Quality" )  {
    return(
        <div className=" card flex flexDirection flex flexJustify" >
        <Icons name="history1" className="" ></Icons>

        <div>  <Text type="colText">Quality</Text>
        <Text type="bigText"> Good</Text> </div>
        
         </div>
)
  }

  if ( type === "minmax" )  {
    return(
        <div className=" card flex flexDirection flex flexJustify" >
        <Icons name="history1" className=""></Icons> 



        <div>  <Text type="colText">Min / Max</Text>
        <Text type="bigText"> 100 / 40 000</Text> </div>
        
         </div>
)
  }


  if (type === "speed" )  {
    return(
        <div className=" card flex flexDirection flex flexJustify" >
        <Icons name="help1" className=""></Icons>

        <div>  <Text type="colText">Speed Per Delay</Text>
        <Text type="bigText"> 50k</Text> </div>
        
         </div>
    )
  }

  if ( type === "start" )  {
    return(
        <div className=" card flex flexDirection flex flexJustify" >
        <Icons name="add1" className=""></Icons>

        <div>  <Text type="colText">Start Time</Text>
        <Text type="bigText"> 1h</Text> </div>
        
         </div>
    )
  }

  if ( type === "refil" )  {
    return(
        <div className=" card flex flexDirection flex flexJustify" >
        <Icons name="services1" className=""></Icons>

        <div>  <Text type="colText">Refil</Text>
        <Text type="bigText"> None</Text> </div>
        
         </div>
    )
  }

  if ( type === "average" )  {
    return(
        <div className=" card flex flexDirection flex flexJustify" >
        <Icons name="panels1" className=""></Icons>

        <div>  <Text type="colText">Average Time</Text>
        <Text type="bigText"> 43h 15m</Text> </div>
        
         </div>
    )
  }

  if (type === "refilb" )  {
    return(
        <div className=" card flex flexDirection flex flexJustify" >
        <Icons name="wallet1" className=""></Icons>

        <div>  <Text type="colText">Refil Button</Text>
        <Text type="bigText"> No</Text> </div>
        
         </div>
    )
  }

  if (type === "cancelled" )  {
    return(
        <div className=" card flex flexDirection flex flexJustify" >
        <Icons name="settings1" className=""></Icons>

        <div>  <Text type="colText">Cancelled Button</Text>
        <Text type="bigText" > No</Text> </div>
        
         </div>
    )
  }

  return <div  >
        Problem here incard
         </div>
}