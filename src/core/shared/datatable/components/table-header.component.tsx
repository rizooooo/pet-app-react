import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { Button, Input } from 'reactstrap';
import { DatatableContext } from '../datatable.shared';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router-dom';

import debounce from 'lodash/debounce';

const TableHeader = () => {
    const {
        headers
    } = useContext(DatatableContext);

    const formRef = useRef<any>();

    const { push, location } = useHistory();

    const { search } = useLocation();

    const onSortHeader = async (name: string) => {
        const params = new URLSearchParams(search);

        if (params.has('sort')) {
            if (params.get('sort') && params.get('sort')?.includes('asc')) {
                params.set('sort', `${name} desc`);
            } else {
                params.set('sort', `${name} asc`);
            }

        } else {
            params.append('sort', `${name} asc`);
        }

        push({
            pathname: location.pathname,
            search: params.toString()
        })
    }

    const onBlurSearch = (value: string, name: string) => {

        const params = new URLSearchParams(search);

        if (params.has(name)) {
            value ? params.set(name, value) : params.set(name, '');
        } else {
            params.append(name, value);
        }

        push({
            pathname: location.pathname,
            search: params.toString()
        })
    }

    const onSearchColumn = debounce((search: string, name: string) => {
        onBlurSearch(search, name)
    }, 1000)

    const getDefaultValue = useCallback((name: string) => {
        const params = new URLSearchParams(search);
        return params.get(name);
    }, [search])

    const onRenderSort = (column: string) => {
        const params = new URLSearchParams(search);
        return params && params.get('sort') && params.get('sort')?.includes(column + ' ') ? (params.get('sort')?.includes('asc') ? <FaSortAmountUp /> : <FaSortAmountDown />) : ''
    }

    return (
        <thead className='thead-dark' data-testid='tableheader-id'>
            <tr>
                {headers && headers.map(a => (
                    <th key={a.title}>
                        <div className='d-flex justify-content-between mb-2' style={{ cursor: 'pointer' }} onClick={() => onSortHeader(a.column)}>
                            <span>
                                {a.title}
                            </span>
                            <span>
                                {onRenderSort(a.column)}
                            </span>
                        </div>
                        {!a.date ?
                            <Input defaultValue={getDefaultValue(a.column) || ''} onChange={e => onSearchColumn(e.target.value, a.column)} bsSize={'sm'} /> : <Button onClick={() => formRef.current.reset()} size={'sm'} type='button' block>Select Date Range</Button>
                        }
                    </th>
                ))}
            </tr>
        </thead >
    )
}

export default TableHeader;
