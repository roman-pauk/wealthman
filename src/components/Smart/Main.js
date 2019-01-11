import React from 'react'
import {Route, Switch} from 'react-router-dom'
import routes from '@routes'

function Main() {
    return (
        <Switch>
            {routes.map(route => (<Route key={route.name} {...route} />))}
        </Switch>
    )
}

export default Main