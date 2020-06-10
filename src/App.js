import React from "react"

import { Layout } from "./layout"
import Theme from "./Theme"
import Router from "./Router"

const App = () => (
  <Theme>
    <Layout>
      <Router />
    </Layout>
  </Theme>
)

export default App
