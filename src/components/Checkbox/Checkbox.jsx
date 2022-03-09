import React from 'react'
import Check from '../../icons/Check'
import { useState } from 'react'
import './_checkbox.scss'

const Checkbox = ({className, checked = false, onChange}) => {

    const checkboxClassName = `checkbox ${className ? className : ''}`
    const [isChecked, setChecked] = useState(checked)

    const handleChange = () => {
        const newValue = !isChecked
        setChecked(newValue)
        
        if (onChange) {
            onChange(newValue)
        }
    }

    return(
        <label className={checkboxClassName}>
            <input 
                className='checkbox__real'
                checked={isChecked}
                onChange={handleChange}
                type="checkbox" />
            <div className='checkbox__custom'>
                {checked && <Check />}
            </div>
        </label>
    )
}

export default Checkbox