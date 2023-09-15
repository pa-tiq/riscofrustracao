import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <div className="item v2">
        <h4>{props.value || '-'}</h4> 
        <label>{props.label}</label>
    </div>
)
