import React from "react";


export const Input = ({  className, placeholder , type, value, range, max,  min, onChange }) => {
return <input className={className}  placeholder={placeholder} onChange={onChange}  value={value} range={range} max={max} min= {min} type={type}/> 

}