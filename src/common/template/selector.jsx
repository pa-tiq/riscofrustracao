import React from 'react'
import Selectors from 'react-awesome-selector'
import 'modules/react-awesome-selector/dist/style.css'

const data = [
  { category: 'calculate', name: 'card', value: 89519 },
  { category: 'calculate', name: 'array', value: 49024 },
  { category: 'lavender', name: 'Grocery', value: 90170 },
  { category: 'lavender', name: 'input', value: 56963 },
]

export default props => (
    <Selectors
      data={data}
      selectedTitle="Cart"
      getSelected={values => alert(JSON.stringify(values))}
    />
)
