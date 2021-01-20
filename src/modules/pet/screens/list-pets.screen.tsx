import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import { IPet, ITableConfig } from '../../../core/interfaces';
import { Datatable } from '../../../core/shared';
import { PetService } from '../service'
import { FaPaw } from 'react-icons/fa';
import { IDatatableAction } from '../../../core/actions';

const ListPetsScreen = () => {
    const { search } = useLocation();
    const { push } = useHistory();

    const config: ITableConfig[] = [
        {
            title: 'Pet Name',
            column: 'name'
        },
        {
            title: 'Breed',
            column: 'breed'
        },
        {
            title: 'Age',
            column: 'age'
        },
        {
            title: 'Gender',
            column: 'gender'
        },
        {
            title: 'Date Added',
            column: 'createdAt',
            date: true
        }
    ]

    const [pets, setPets] = useState<IPet[]>([]);


    const init = useCallback(async (params?: any) => {
        const res = await PetService.FetchPets(params || null);
        if (res) {
            setPets(res);
        }
    }, [])

    useEffect(() => {
        init();
    }, [init])


    useEffect(() => {
        const params = new URLSearchParams(search);

        let petParams: any = {};
        params.forEach((a, key) => {
            if (!a || a !== '') {
                petParams[key] = a;
            }
        })

        init(petParams)
    }, [search]);

    const tableHandler = ({ type, data }: IDatatableAction) => {
        switch (type) {
            case 'ON_CLICK_ROW':
                const selectedPet: IPet = data;
                push('/' + selectedPet._id);
                break;

            default:
                break;
        }
    }


    return (
        <Container fluid>
            <Row className='my-3'>
                <Col className='display-4 d-flex justify-content-center'>
                    <FaPaw className='mr-2' />
                    Pets
                </Col>
            </Row>
            <Row className='my-2'>
                <Col>
                    <Button onClick={() => push('/create')} color={'info'}>Add a Pet</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Datatable
                        headers={config}
                        data={pets}
                        handler={tableHandler}
                    />
                </Col>
            </Row>
        </Container>

    )
}

export default ListPetsScreen
