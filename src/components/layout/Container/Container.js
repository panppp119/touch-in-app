import React from 'react'
import styles from 'styled-components'

const ContainerComp = styles.div`
  max-width: 95%;
  width: 100%;
  margin: auto;
  transition: padding-left 0.3s ease-in;
  padding: 0;
  position: relative;

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    padding-left: ${(props) => (props.showMenu ? '20%' : '10px')};
  }
`

const Container = ({ showMenu, children }) => {
  return <ContainerComp showMenu={showMenu}>{children}</ContainerComp>
}

export default Container
