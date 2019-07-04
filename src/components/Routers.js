import React from 'react'

// React router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import Navigation from './Navigation/Navigation'
import Home from './Home/Home'
import About from './About/About'
import NoMatch from './NoPageHit/NoPageHit'

const Routes = () => {
    return (
        <div>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes;