import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { IRoute } from '../../core/interfaces'
import { ViewPetScreen, ListPetsScreen } from './screens'


const Routes: IRoute[] = [
    {
        name: 'List All Pets',
        component: ListPetsScreen,
        path: '/',
        exact: true
    },
    {
        name: 'View All Pets',
        component: ViewPetScreen,
        path: ['/create', '/:id'],
        exact: true
    },
    // {
    //     name: 'View All Pets',
    //     component: ViewPetScreen,
    //     path: '/create',
    //     exact: true
    // }
]

const PetModule = () => {
    return (
        <Switch>
            {Routes && Routes.map(a => <Route key={a.name} {...a} />)}
        </Switch>
    )
}

export default PetModule
