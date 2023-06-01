import React from 'react'

const DropDown = ({days, language}) => {
    return <>
        <h1>{language}</h1>
        <select name="language" id="">
        {days.map(day=>{
            return (
                <option>{day}</option>
            )
        })}
        </select>
    </>
}

export default DropDown