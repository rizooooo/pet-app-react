import React from 'react';
import { render } from '@testing-library/react';
import Table from './datatable.shared';
import { BrowserRouter } from 'react-router-dom'
import { ITableConfig } from '../../interfaces';



describe('Datatable', () => {
  const mockHeaders: ITableConfig[] = [
    {
      title: 'Name',
      column: 'name',
    }
  ];

  const mockData: any[] = [
    {
      title: 'Name',
    },
    {
      title: 'Age'
    }
  ];

  const { queryByTestId } = render(
    <BrowserRouter >
      <Table data={[]} handler={jest.fn()} headers={mockHeaders} />
    </BrowserRouter>
  );

  it('should renders Correctly', () => {
    expect(queryByTestId("datatable-id")).toBeTruthy();
    expect(queryByTestId("tableheader-id")).toBeTruthy();
  });

  it('table data and headers should be a array', () => {
    expect(Array.isArray(mockHeaders)).toBe(true);
    expect(Array.isArray(mockData)).toBe(true);
  });

})