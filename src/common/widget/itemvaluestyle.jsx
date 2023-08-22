import React from 'react';
import Grid from '../layout/grid';
//import { Trans } from 'react-i18next'

export default (props) => (
  <div
    className='item v2'
    style={{ backgroundColor: props.color, alignItems: 'center' }}
  >
    <h4>{props.value || '-'}</h4>
    <label>{props.label}</label>
  </div>
);

//<label><Trans i18nKey={props.label} /></label>
