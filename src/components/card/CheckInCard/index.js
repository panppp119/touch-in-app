import React from 'react'
import { Link } from 'react-router-dom'
import styles from 'styled-components'
import moment from 'moment'

const Card = styles(Link)`
  background: linear-gradient(97.41deg, #F869D5 1.01%, #5650DE 100%);
  border-radius: 12px;
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    margin: 0;
    width: 100px;
    height: auto;
    margin-right: 10px;
  }

  .details {
    color: var(--white);

    h4 {
      color: var(--white);
    }

    p {
      margin: 0;
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 20px;

    img {
      margin-right: 20px;
    }
  }
`

class CheckInCard extends React.Component {
  render() {
    const { imgSrc, checkinType, projName, date, location, path } = this.props

    return (
      <Card to={path}>
        <img className='image ' src={imgSrc} alt='' />

        <div className='details'>
          <h4>{checkinType}</h4>
          <p>{projName}</p>
          <p>เวลา : {date}</p>
          <p>สถานที่ : {location}</p>
        </div>
      </Card>
    )
  }
}

CheckInCard.defaultProps = {
  imgSrc: 'https://placeholde.it/100x100',
  checkinType: 'CheckIn Type',
  projName: 'Project Name',
  date: moment().format('DD/MM/YYYY HH:mm'),
  location: 'Location',
}

export default CheckInCard
