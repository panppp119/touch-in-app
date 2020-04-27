import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import Container from 'components/layout/Container'
import menuItems from 'constants/menuItems'

import './Menu.scss'

class Menu extends React.Component {
  render() {
    const { visibility, setVisibility, location } = this.props

    return (
      <>
        <div className='menubar'>
          <Container>
            <span id='roundButton' onClick={setVisibility}>
              <svg width='30' height='30'>
                <path d='M0,5 30,5' stroke='#fff' strokeWidth='5' />
                <path d='M0,14 30,14' stroke='#fff' strokeWidth='5' />
                <path d='M0,23 30,23' stroke='#fff' strokeWidth='5' />
              </svg>
            </span>
          </Container>
        </div>

        <div id='flyout-menu' className={visibility ? 'show' : 'hide'}>
          <div className='menu-items'>
            {menuItems.map((menu, index) => {
              if (menu.subMenu) {
                return (
                  <div
                    className='has-submenu'
                    key={index}
                    onClick={setVisibility}
                  >
                    <p>{menu.name}</p>

                    {menu.subMenu.map((sub, subIndex) => {
                      return (
                        <Link
                          to={`${menu.path}${sub.path}`}
                          onClick={setVisibility}
                          key={subIndex}
                          className={classnames([
                            'submenu',
                            {
                              active: sub.path.includes(
                                location.pathname.split('/')[2],
                              ),
                            },
                          ])}
                        >
                          - {sub.name}
                        </Link>
                      )
                    })}
                  </div>
                )
              } else {
                return (
                  <Link
                    to={menu.path}
                    onClick={setVisibility}
                    key={index}
                    className={classnames({
                      active: location.pathname === menu.path,
                    })}
                  >
                    {menu.name}
                  </Link>
                )
              }
            })}
            <Link to='/login' onClick={setVisibility}>
              ออกจากระบบ
            </Link>
          </div>
        </div>
      </>
    )
  }
}

Menu.defaultProps = {
  visibility: false,
  setVisibility: () => {},
}

Menu.propTypes = {
  visibility: PropTypes.bool,
  setVisibility: PropTypes.func,
}

export default Menu
