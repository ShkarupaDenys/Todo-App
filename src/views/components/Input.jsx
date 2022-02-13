import React from "react"

const Input = ({placeholder, onChange, value}) => (
        <input className="input" placeholder={placeholder} onChange={(e) => onChange(e)} value={value}/>
    )

export default Input