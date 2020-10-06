import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const ListPeople = ({ peoples, a, b }) => (
  <div>
    <span>{a}</span>
    <span>{b}</span>
    <ul>
      {peoples.map((p, index) => <li key={index}>{p.name}</li>)}
    </ul>
  </div>
)

ListPeople.propTypes = {
  peoples: PropTypes.array.isRequired,
  a: PropTypes.number,
  b: PropTypes.number
}

export default ListPeople