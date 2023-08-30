import React from 'react';
//import Slider, { Range } from 'rc-slider'
// We can just import Slider or Range to reduce bundle size
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

import { abbreviateNumber } from '../../common/functions/utilsjs';

class SliderOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      min: this.props.min,
      max: this.props.max,
      showvalue: this.props.showvalue,
      defaultValue: [],
      value: this.props.defaultValue || 0,
      div: this.props.div || 1,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.value === this.props.value &&
      this.state.value != this.props.value &&
      prevState.value === this.state.value
    ) {
      //console.log(prevProps.value, this.props.value, this.state.value, prevState.value)
      this.setState({ value: this.props.value });
    }
  }

  render() {
    //console.log(this.state.value)
    return (
      <div className='item v2 slider'>
        <input value={this.state.value / this.props.div} />
        <Slider
          min={this.props.min}
          max={this.props.max}
          defaultValue={this.props.defaultValue}
          value={this.state.value}
          step={this.props.step}
          onChange={(value) => {
            // console.log(value)
            this.setState({ value: value });
            this.setState({
              min: value[0] || 0,
              max: value[1] || this.props.max,
            });
            return this.props.onChange(value);
          }}
          onAfterChange={(value) => {
            // console.log(value)
            this.setState({ value: value });
            this.setState({
              min: value[0] || 0,
              max: value[1] || this.props.max,
            });
            return this.props.onAfterChange(value);
          }}
        />
        <label>{this.props.label}</label>
      </div>
    );
  }
}

export default SliderOne;
