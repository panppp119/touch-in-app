import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { FiMenu } from 'react-icons/fi'
import { connect } from 'react-redux'

import Container from 'components/layout/Container'
import menuItems from 'constants/menuItems'
import { logout } from 'actions/auth'

import './Menu.scss'

class Menu extends React.Component {
  logout = () => {
    this.props.setVisibility()
    this.props.logout()
  }

  render() {
    const { visibility, setVisibility, location } = this.props

    return (
      <>
        <div className='menubar'>
          <Container>
            <FiMenu onClick={setVisibility} />
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
            <Link to='/login' onClick={this.logout}>
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

const mapDispatchToProps = {
  logout: () => logout(),
}

export default connect(null, mapDispatchToProps)(Menu)
