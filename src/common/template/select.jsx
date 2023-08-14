import React from 'react'

export default props => (
    <div>
        <label> {props.label}</label>
        <select value={props.value} onChange= { (e) => { props.handle(e.target.value) }}>
            {props.data.map( ({value, label}) => { 
                return ( <option value= {value}> {label} </option> )
            })}
        </select>
    </div>
)