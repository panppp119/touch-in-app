import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import Container from 'components/layout/Container'
import menuItems from 'constants/menuItems'

import './Menu.scss'

class Menu extends React.Component {
  state = {
    menuIndex: null,
  }

  handleClickMenu = (index) => {
    if (this.state.menuIndex === index) {
      this.setState({ menuIndex: null })
    } else {
      this.setState({ menuIndex: index })
    }
  }

  handleClickMenuLink = () => {
    this.props.setVisibility()
    this.setState({ menuIndex: null })
  }

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
                    onClick={() => this.handleClickMenu(index)}
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
                            { active: location.pathname === sub.path },
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
                    onClick={this.handleClickMenuLink}
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
            <Link to='/login' onClick={this.handleClickMenuLink}>
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
