import React from 'react';
import { Switch, Route } from 'react-router';
import About from './src/About'
import Projects from './src/Projects'
import Contact from './src/Contact'
const Routes = () => {
  return (
    <Switch>
      <Route path='/about' component = { About } />
      <Route path='/projects' component = { Projects } />
      <Route path='/contact' component = { Contact }/>
      <Route path='/' />
    </Switch>

  )
}
export default Routes