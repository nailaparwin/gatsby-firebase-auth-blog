import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"

const App = () => (
  <Layout>
    <Status />
    <Router>
      <PrivateRoute path="/app/bloglist" component={BlogList} location={''} />      
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
