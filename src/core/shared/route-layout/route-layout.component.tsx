import React from 'react'
import { Route } from 'react-router-dom';

interface IProps {
    layout: (params?: any) => JSX.Element;
    component: (params?: any | null) => JSX.Element | any;
    path: string | string[];
    exact?: boolean;
}

const RouteWithLayout = (props: IProps) => {
    const { layout: Layout, component: Component, ...rest } = props;

    return (
        <Route
            data-testid='routelayout-id'
            {...rest}
            render={matchProps => (
                <Layout>
                    <Component {...matchProps} />
                </Layout>
            )}
        />
    );
};

export default RouteWithLayout;
