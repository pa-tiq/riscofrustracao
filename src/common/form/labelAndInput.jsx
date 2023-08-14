import React from 'react' 
import Grid from '../layout/grid'

export default props => (

    <div className='item v2 input'>

        <label htmlFor={props.name}>{props.label}</label>

        <input {...props.input} 
            className='form-control' 
            placeholder={props.placeholder} 
            readOnly={props.readOnly} 
            type={props.type} 
            defaultValue={props.value}
            disabled={props.disabled}
            onkeypress={props.onkeypress}
            key={props.value}
            // value={props.value}
            onChange={(event) => {
                // console.log(event.target.value)
                props.onChange( event.target.value.replace(props.regex, ''))
            }}
            onBlur={(event) => {
                //console.log(event.target.value)
                props.onBlur( event.target.value.replace(props.regex, ''))
            }}
        />

    </div> 
)