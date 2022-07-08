import React from 'react'
import Index from './components/Index'
import {Redirect,Route,Switch} from 'react-router-dom'
import Form from './components/Form'

export default function App() {
  return (
    <div style={{"width":"500px","margin":"0 auto"}}>
      
      <Switch>
      <Route exact path="/home" component={Index} />
      <Route exact path="/add" component={Form} />
      <Route exact path="/change" component={Form} />
      <Redirect to="/home" />
      </Switch>
    </div>
  )
}
