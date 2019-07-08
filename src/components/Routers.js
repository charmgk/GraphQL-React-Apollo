import React from 'react'

// React router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import Navigation from './NavigationBar/Navigation'
import Home from './HomePage/Home'
import About from './AboutPage/About'
import NoMatch from './404Error/404Error'

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