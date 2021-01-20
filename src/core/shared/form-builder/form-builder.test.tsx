import React from 'react';
import { render } from '@testing-library/react';
import FormBuilder from './form-builder.shared';
import { BrowserRouter } from 'react-router-dom'
import { IFormBuilderConfig, IFormBuilderLayout, ITableConfig } from '../../interfaces';



describe('Formbuilder', () => {
    it('should renders Correctly', () => {
        const schema: IFormBuilderLayout[] = [
            {
                rows: [
                    {
                        label: 'Age',
                        name: 'age',
                        placeholder: true,
                        size: 12,
                        type: 'number',
                        rules: {
                            required: 'Pet Age is required'
                        }
                    },
                ]
            },
        ]

        const { queryByTestId } = render(
            <FormBuilder schema={schema} onSubmit={jest.fn()} />
        );
        
        expect(queryByTestId("formbuilder-id")).toBeTruthy();
        expect(Array.isArray(schema)).toBe(true);
    });
})