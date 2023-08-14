import React from 'react' 
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}> 
        <div className='item text-center font-weight-bold'> 
            <label htmlFor={props.name}>{props.label}</label>
            <input {...props.input} 
                className='form-control' 
                placeholder={props.placeholder} 
                readOnly={props.readOnly} 
                type={props.type} 
                min={props.min}
                max={props.max}
                step={props.step}
                onkeypress={props.onkeypress}
                value={props.value}
                defaultValue={props.value}

                onChange={(event) => {
                    // console.log(event.target.value)
                    props.onChangeValue( event.target.value.replace(props.regex, ''))
                }}
                onBlur={(event) => {
                    //console.log(event.target.value)
                    props.onBlurValue( event.target.value.replace(props.regex, ''))
                }}
            />
            {props.showlabel && ( <label htmlFor={props.name}>{props.valueLabel}</label> )}
        </div> 
    </Grid>
)
