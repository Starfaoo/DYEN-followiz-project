import React from "react";


export const Button =(props)=>{
  const  {type,  btntxt, name } = props
return(
    <>
    <button className="green" style={{ border: "none",   borderRadius:"3px", color:"white" , fontSize:"20px", padding: "10px"}} id={name} type={type} btntxt={btntxt}>{btntxt}</button>
    </>
);
};