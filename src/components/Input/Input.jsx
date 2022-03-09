import React from "react"
import './_input.scss'

const Input = ({placeholder, onChange, value}) => (
        <input className="input" placeholder={placeholder} onChange={onChange} value={value}/>
    )

export default Input