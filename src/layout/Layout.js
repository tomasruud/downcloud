import React from 'react'
import styled from 'styled-components'

import Footer from './Footer'

const Wrapper = styled.div`
  max-width: 600px;
  margin: 3rem auto 3rem;
`

const Main = styled.main`
  padding: 0;
`

const Layout = ({children}) => (
  <Wrapper>
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
)

export default Layout
