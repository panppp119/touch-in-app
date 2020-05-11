import React from 'react'
import styles from 'styled-components'

const Filter = styles.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  display: none;

  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
    display: flex;
  }

  .form-group {
    display: flex;
  }
`

const ReportFilter = () => {
  return (
    <Filter>
      <div className='form-field'>
        <p>Check-In Type</p>
        <select>
          <option>Check-In Type 1</option>
          <option>Check-In Type 2</option>
        </select>
      </div>

      <div className='form-field'>
        <p>Project</p>
        <select>
          <option>Project 1</option>
          <option>Project 2</option>
        </select>
      </div>

      <div className='form-group'>
        <div className='form-field'>
          <p>Start Date</p>
          <input type='date' />
        </div>
        <div className='form-field'>
          <p>End Date</p>
          <input type='date' />
        </div>
      </div>

      <div className='form-field'>
        <button>Search</button>
      </div>
    </Filter>
  )
}

export default ReportFilter
