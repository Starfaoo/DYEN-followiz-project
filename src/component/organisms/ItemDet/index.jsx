import React from "react";
import { Card } from "../../molecules";
import { Text } from "../../atoms";

export const ItemDet = (props) =>{
    return(
        <div className="   "  {...props} >
            <Text type="bigText" className="flex pad flexJustify2"> Item Details</Text>
            <div  className="{className}  flex cardheight  flexwrap "> 
            
            <Card type="Quality" className=" cardwidth"></Card>
            <Card  type="minmax" className=" cardwidth"></Card> 
            <Card  type="speed" className=" cardwidth"></Card> 
            <Card  type="start" className=" cardwidth"></Card> 
            <Card  type="refil" className=" cardwidth"></Card> 
            <Card  type="average" className=" cardwidth"></Card> 
            <Card  type="refilb" className=" cardwidth"></Card> 
            <Card  type="cancelled" className=" cardwidth"></Card> 
           
             </div>
        
            </div>
    );
};




// import React from 'react';

// export const ItemDet = ({ selectedOption1 }) => {
    
//   return (
//     <div className="selected-option-display">
//       <h3>Selected Option:</h3>
//       {selectedOption1 && <div>{selectedOption1} selected</div>}
//     </div>
//   );
// };
