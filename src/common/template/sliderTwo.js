import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

import { abbreviateNumber } from '../functions/utilsjs';
import { useEffect, useState } from 'react';

const SliderTwo = (props) => {
  const [userValue, setUserValue] = useState(props.defaultValue);
  const [inputValue, setInputValue] = useState(null);

  const { value: propvalue } = props;

  useEffect(() => {
    setUserValue(propvalue);
  }, [propvalue]);

  useEffect(() => {
    if(inputValue){
      const timeOutId = setTimeout(parseInputChange, 1000);
      return () => clearTimeout(timeOutId);
    }
  }, [inputValue]);

  const handleSliderChange = (value) => {
    return props.onChange(value);
  };

  const parseInputChange = () => {
    try {
      if (inputValue && !isNaN(parseFloat(inputValue))) {
        let newValue = parseFloat(inputValue).toFixed(2);
        if (newValue < props.min) newValue = props.min;
        else if (newValue > props.max) newValue = props.max;
        props.onChange(newValue);
      } else {
        props.onChange(props.defaultValue);
      }
      setInputValue(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='item v2 slider'>
      <input
        type='text'
        value={inputValue === null ? userValue : inputValue}
        onChange={handleInputChange}
      />
      <Slider
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue}
        value={userValue}
        step={props.step}
        onChange={handleSliderChange}
      />
      <label>{props.label}</label>
    </div>
  );
};

export default SliderTwo;
