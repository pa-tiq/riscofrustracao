import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}> 
        <div className={`small-box bg-${props.color}`}> 
            <div className='inner'> 
                <h4>{props.text}</h4> 
                <h2>{props.value}</h2> 
            </div> 
            <div className='icon'> 
                <i className={`fa fa-${props.icon}`}></i> 
            </div> 
        </div> 
    </Grid>
)
