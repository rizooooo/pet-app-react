import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap';
import { IFormBuilderLayout, IPet, IRouteParams } from '../../../core/interfaces';
import { FormBuilder } from '../../../core/shared';
import { PetService } from '../service';

const ViewPetScreen = () => {
    const { id } = useParams<IRouteParams>();

    const [fetchingPet, setFetchingPet] = useState<boolean>(id ? true : false)

    const [fetchedPet, setFetchedPet] = useState<IPet | null>(null);
    const { push } = useHistory();

    useEffect(() => {
        if (id) {
            fetchPet();
        }
    }, [id]);

    const fetchPet = async () => {
        try {
            const res: IPet | undefined = await PetService.GetPet(id);

            if (res) {
                setFetchedPet(res);
                setFetchingPet(false);
            } else {
                setFetchingPet(false);
            }

        } catch (error) {
            console.log('error')
            setFetchingPet(false);
        }
    }

    const formSchema: IFormBuilderLayout[] = [
        {
            header: id ? 'Edit Pet' : 'Create Pet',
            rows: [
                {
                    label: 'Name',
                    name: 'name',
                    placeholder: true,
                    size: 12,
                    type: 'text',
                    rules: {
                        required: 'Pet Name is required'
                    }
                }
            ]
        },
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
        {
            rows: [
                {
                    label: 'Gender',
                    name: 'gender',
                    placeholder: true,
                    size: 12,
                    type: 'dropdown',
                    rules: {
                        required: 'Gender is required'
                    },
                    dropdown: {
                        items: [
                            {
                                name: 'Male'
                            },
                            {
                                name: 'Female'
                            }
                        ],
                        label: 'name',
                        value: 'name'
                    }
                },
            ]
        },
        {
            rows: [
                {
                    label: 'Breed',
                    name: 'breed',
                    placeholder: true,
                    size: 12,
                    type: 'dropdown',
                    rules: {
                        required: 'Breed is required'
                    },
                    dropdown: {
                        items: [
                            {
                                name: 'Dog'
                            },
                            {
                                name: 'Cat'
                            }
                        ],
                        label: 'name',
                        value: 'name'
                    }
                },
            ]
        }
    ]

    const onSubmit = async (data: IPet) => {
        try {
            const res = await PetService.CreatePet(data);
            console.log(res)
            push('/');
        } catch (error) {
            console.log(error)
        }
    }

    const onUpdate = async (data: IPet) => {
        try {
            const res = await PetService.UpdatePet(data, fetchedPet?._id!);
            console.log(res)
            push('/');
        } catch (error) {
            console.log(error)
        }
    }

    const onDelete = async () => {
        try {
            const res = await PetService.DeletePet(fetchedPet?._id!);
            console.log(res)
            push('/');
        } catch (error) {
            console.log(error)
        }
    }

    const CustomButtons = () => (
        <>
            <Button type='button' onClick={onDelete} className='mr-2' color={'danger'}>Delete Pet</Button>
        </>
    )

    if (id && fetchingPet && !fetchedPet) {
        return <h4>Fetching Pets...</h4>
    }

    return (
        <Container fluid>
            <Row className='justify-content-center'>
                <Col md={5}>
                    <FormBuilder
                        onSubmit={id ? onUpdate : onSubmit}
                        schema={formSchema}
                        defaultValues={fetchedPet}
                        config={{
                            showCancelButton: true,
                            cancelButtonHandler: () => push('/')
                        }}
                        formCustomButtons={id ? CustomButtons : undefined}
                    />
                </Col>
            </Row>

        </Container>
    )
}

export default ViewPetScreen
