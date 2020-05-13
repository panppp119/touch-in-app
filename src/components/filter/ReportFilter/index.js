import React from 'react'
import styles from 'styled-components'
import firebase from '../../.././config/firebaseConfig'
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
  }
`
function searchingFor(term) {
  return function (x) {
    
      return (x.generic_name.toLowerCase().includes(term.toLowerCase()) || 
      x.Name_type.toLowerCase().includes(term.toLowerCase()) || !term);
  }
} 
function componentDidMount  () {
  const itemsRef = firebase.database().ref('Datebase Name');
  itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      var newState = [];
      for (let item in items) {
          newState.push({
              item_id: item,
              checkin: items[item].checkin,
              project: items[item].project,
              department: items[item].department,
              date1: items[item].date1,
              date2: items[item].date2,
              time: items[item].time,
              location: items[item].location,
          })
      }
      try {
          this.setState({
              items: newState,
          })
      } catch (exception) { }
  })
}
function search  (e) {
  this.setState({ data: e.target.value })
}

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
        <button>Clear</button>
        <button>Search</button>
      </div>
    </Filter>
  )
}

export default ReportFilter
