import React from 'react'
//import Slider, { Range } from 'rc-slider'
// We can just import Slider or Range to reduce bundle size
import Slider from 'rc-slider/lib/Slider'
import Range from 'rc-slider/lib/Range'
import 'rc-slider/assets/index.css'

import { abbreviateNumber } from '../../common/functions/utilsjs'


class SliderRange extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            step: 1,
            min: this.props.min,
            max: this.props.max,
            defaultValue: [],
            value: 0
        } 
    }

    render() {

        return (
            <div className="slider">
                <div style={{width: this.props.width, margin: 'auto', display: 'inline-block'}}>
                    <div className="item text-center font-weight-bold">
                        <label style={{minWidth: '20px', display: 'inline-block' }}> {this.props.label} </label> 
                    </div>
                    <Range 
                        min={this.props.min}
                        max={this.props.max}
                        defaultValue={this.props.defaultValue} 
                        step={this.props.step}
                        onChange={(value) => {
                            // console.log(value)
                            this.setState({value: value})
                            this.setState({min: value[0] || 0, max: value[1] || this.props.max })
                            return this.props.onChange(value)
                        }}
                        onAfterChange={(value) => {
                            // console.log(value)
                            this.setState({value: value})
                            this.setState({min: value[0] || 0, max: value[1] || this.props.max })
                            return this.props.onAfterChange(value)
                        }}
                    />
                    <h4>
                        <div className="item text-center font-weight-bold">
                            <label style={{minWidth: '20px', display: 'inline-block'}}>{this.state.min}</label>
                            <label style={{minWidth: '20px', display: 'inline-block'}}>a</label>   
                            <label style={{width: '100px', minWidth: '20px', display: 'inline-block'}}>{abbreviateNumber(this.state.max)}</label> 
                        </div>
                    </h4>
                </div>
            </div>
        )
    }
}   

export default SliderRange