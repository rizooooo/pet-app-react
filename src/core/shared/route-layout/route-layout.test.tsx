import React from 'react';
import { render } from '@testing-library/react';
import RouteLayout from './route-layout.component';
import { IFormBuilderLayout } from '../../interfaces';
import { BrowserRouter } from 'react-router-dom';



describe('RouteLayout', () => {
    it('should renders Correctly', () => {

        const Hello = () => <h1>hELLO</h1>
        const Layout = () => <div>hELLO</div>
        const path = 'users';
        const exact = true;

        const { queryByTestId } = render(
            <BrowserRouter>
                <RouteLayout key={path} component={Hello} layout={Layout} path={path} exact={exact} />
            </BrowserRouter>

        );

        expect(Hello).toBeTruthy();
        expect(Layout).toBeTruthy();
        expect(path).toBeDefined();
    });
})