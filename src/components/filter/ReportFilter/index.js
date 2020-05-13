import React from 'react'
import styles from 'styled-components'

const Filter = styles.div`
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;  
  }

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: none;

    @media screen and (min-width: 1280px) {
      display: flex;
    }

    .form-group {
      display: flex;
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    @media screen and (min-width: 1280px) {
      margin-top: 20px;
    }

    button {
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }

      @media screen and (min-width: 1280px) {
        margin-right: 20px;
      }
    }
    .btn {
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;        
  }
    .btn:focus, .btn.focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  
    .btn-danger {
      margin-top: 10px;
      color: #fff;
      background-color: #dc3545;
      border-color: #dc3545;
    }
    
    .btn-danger:hover {
      color: #fff;
      background-color: #c82333;
      border-color: #bd2130;
    }
    
    .btn-danger:focus, .btn-danger.focus {
      color: #fff;
      background-color: #c82333;
      border-color: #bd2130;
      box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);
    }

    .btn-light {
      margin-top: 10px;
      color: #fff;
      background-color: #343a40;
      border-color: #343a40;
    }
    
    .btn-light:hover {
      color: #fff;
      background-color: #23272b;
      border-color: #1d2124;
    }
    
    .btn-light:focus, .btn-primary.focus {
      color: #fff;
      background-color: #23272b;
      border-color: #1d2124;
      box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);
    }

    .btn-success {
      margin-top: 10px;
      color: #fff;
      background-color: #28a745;
      border-color: #28a745;
    }
    
    .btn-success:hover {
      color: #fff;
      background-color: #218838;
      border-color: #1e7e34;
    }
    
    .btn-success:focus, .btn-success.focus {
      color: #fff;
      background-color: #218838;
      border-color: #1e7e34;
      box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);
    }

  }
`

const ReportFilter = () => {
  return (
    <Filter>
      <div className='filter'>
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

        <div className='form-field'>
          <p>Department</p>
          <select>
            <option>Department 1</option>
            <option>Department 2</option>
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
      </div>

      <div className='actions'>
        <button type="button" className='btn btn-light'>พิมพ์รายงาน</button>
        <button type="button" className='btn btn-success'>ค้นหา</button>
        <button type="button" className='btn btn-danger'>ยกเลิก</button>
      </div>
    </Filter>
  )
}

export default ReportFilter
