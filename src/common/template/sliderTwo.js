import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

import { abbreviateNumber } from '../functions/utilsjs';
import { useEffect, useState } from 'react';

const SliderTwo = (props) => {
  const [userValue, setUserValue] = useState(props.defaultValue);
  const [inputValue, setInputValue] = useState(null);
  const [sliderValue, setSliderValue] = useState(null);

  const { value: propvalue } = props;

  useEffect(() => {
    setUserValue(propvalue);
  }, [propvalue]);

  useEffect(() => {
    if (inputValue) {
      const timeOutInputId = setTimeout(parseInputChange, 1000);
      return () => clearTimeout(timeOutInputId);
    }
  }, [inputValue]);

  useEffect(() => {
    if (sliderValue) {
      const timeOutSliderId = setTimeout(parseSliderChange, 600);
      return () => clearTimeout(timeOutSliderId);
    }
  }, [sliderValue]);

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

  const parseSliderChange = () => {
    props.onChange(sliderValue);
    setSliderValue(null);
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <div className='item v2 slider'>
      <input
        type='text'
        value={inputValue === null ? (sliderValue === null ? userValue : sliderValue) : inputValue}
        onChange={handleInputChange}
      />
      <Slider
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue}
        value={sliderValue === null ? userValue : sliderValue}
        step={props.step}
        onChange={handleSliderChange}
      />
      <label>{props.label}</label>
    </div>
  );
};

export default SliderTwo;
