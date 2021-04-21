import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import Menu from 'components/nav/Menu/Menu'
import Container from 'components/layout/Container'

import { checkAuth } from 'actions/auth'

import './CoreLayout.scss'

class CoreLayout extends React.Component {
  state = {
    showMenu: false,
  }

  componentDidMount() {
    if (localStorage.getItem('token') !== null && this.props.auth.isEmpty()) {
      this.props.checkAuth()
    }
  }

  setShowMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    const { showMenu } = this.state

    return (
      <div id='corelayout'>
        <nav className='layout-header'>
          <Menu
            visibility={showMenu}
            setVisibility={this.setShowMenu}
            {...this.props}
          />
        </nav>

        <Container showMenu={showMenu} {...this.props}>
          {this.props.children}
        </Container>

        <footer className='layout-footer'></footer>
      </div>
    )
  }
}

CoreLayout.defaultProps = {}

CoreLayout.propTypes = {
  children: PropTypes.node,
}


const mapStateToProps = (state) => ({
  auth: state.auth || Map()
})

const mapDispathToProps = ({
  checkAuth: () => checkAuth()
})

export default connect(mapStateToProps, mapDispathToProps)(withRouter(CoreLayout))
