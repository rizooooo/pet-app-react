import React from 'react';
import { Switch } from 'react-router-dom';
import { CenterLayout } from './core/layouts';
import { RouteLayout } from './core/shared';
import { PetModule } from './modules';
const Routes = () => {
    return (
        <Switch>
            {/* <Redirect
                exact
                from="/"
                to="/dashboard"
            /> */}
            <RouteLayout
                component={PetModule}
                layout={CenterLayout}
                path={'/'}
            />
            {/* <Route path={'/not-found'} component={NotFoundPage} /> */}
        </Switch>
    )
}



const RouteController = () => {
    return (
        <Routes />
    )
}

export default RouteController;