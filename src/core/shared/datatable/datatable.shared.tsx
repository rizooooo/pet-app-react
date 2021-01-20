import { createContext, FC } from 'react';
import { Button, Table } from 'reactstrap';
import { IDatatableProps, ITableConfig } from '../../interfaces';
import { TableHeader } from './components';
import get from 'lodash/get';
import { useHistory, useLocation } from 'react-router-dom';
import { formatRelative } from 'date-fns';
import { IDatatableAction } from '../../actions';

interface IDatatableContext {
    items: any[]
    headers: ITableConfig[]
}

const data = {
    items: [],
    headers: []
}

export const DatatableContext = createContext<IDatatableContext>(data);

const Datatable: FC<IDatatableProps> = ({ data, headers, handler }) => {

    return (
        <DatatableContext.Provider value={{ items: data, headers }}>
            <Table striped responsive bordered data-testid='datatable-id'>
                <TableHeader />
                <tbody>
                    {data && data.map((a, i) => <tr key={`${i}${a._id}`} style={{ cursor: 'pointer' }} onClick={() => handler({ type: 'ON_CLICK_ROW', data: a })}>
                        {headers && headers.map(h => (
                            <td key={get(a, h.column)}>
                                {
                                    !h.date ? (get(a, h.column) || 'N/A') : (formatRelative(new Date(get(a, h.column)), new Date()))
                                }
                            </td>
                        ))}
                    </tr>)}
                </tbody>
            </Table>
        </DatatableContext.Provider>

    )
}

export default Datatable
