import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Col, CustomInput, Form, FormFeedback, Input, Label, Row } from 'reactstrap';
import { IFormBuilderProps } from '../../interfaces';
import get from 'lodash/get';


const FormBuilder: FC<IFormBuilderProps> = ({ schema, onSubmit, config, defaultValues, formCustomButtons: FormCustomButtons }) => {
    const { register, errors, handleSubmit, formState } = useForm({ mode: 'onBlur', defaultValues: defaultValues || {} });
    const { touched } = formState;

    const {
        cancelButtonHandler,
        cancelButtonText,
        showCancelButton,
        submitText,
    } = config || {};

    return (
        <Form key={'form-builder'} onSubmit={handleSubmit(onSubmit)} data-testid='formbuilder-id'>
            {schema && schema.map((a, index) => (
                <React.Fragment key={index}>
                    {a.header && <Row className='my-2' form>
                        <Col>
                            <h5 className='font-weight-bold'>{a.header}</h5>
                            <hr />
                        </Col>
                    </Row>}
                    <Row key={index} form className='my-2'>
                        {a.rows && a.rows.map((b, colIndex) => (
                            <Col md={b.size} key={`${b.name.toString()}${colIndex}`}>
                                {get(touched, b.name!) && !get(errors, b.name!) && true}
                                <Label className='font-weight-bold'>{b.label}</Label>
                                {(b.type === 'number' || b.type === 'text') &&
                                    <Input
                                        name={b.name}
                                        innerRef={register(b.rules)}
                                        type={b.type}
                                        invalid={errors && get(errors, b.name!) ? true : false}
                                        valid={errors && touched && get(touched, b.name!) && !get(errors, b.name!) ? true : false}
                                    />
                                }
                                {(b.type === 'dropdown' && b.dropdown) &&
                                    <CustomInput
                                        innerRef={register(b.rules) as any}
                                        type="select"
                                        id={b.name}
                                        name={b.name}
                                        invalid={errors && get(errors, b.name!) ? true : false}
                                        valid={errors && touched && get(touched, b.name!) && !get(errors, b.name!) ? true : false}
                                    >
                                        <option value={''}>Select {b.label}</option>
                                        {b.dropdown && b.dropdown.items.map((d, z) => (
                                            <option value={d[b.dropdown?.value!]} key={z}>
                                                {typeof b.dropdown?.label === 'string' ? d[b.dropdown.label] : `${b.dropdown?.label[0]} ${b.dropdown?.label[1]}`}
                                            </option>
                                        ))}
                                    </CustomInput>
                                }
                                <FormFeedback>{errors && get(errors, b.name!) && get(errors, `${b.name}.message`)}</FormFeedback>
                            </Col>
                        ))}
                    </Row>
                </React.Fragment>
            ))}
            <Row form className='mt-3'>
                <Col className='text-right'>
                    {
                        FormCustomButtons && FormCustomButtons()
                    }
                    {showCancelButton &&
                        <Button className='font-weight-bold mr-3' color={'secondary'} onClick={cancelButtonHandler || undefined} type='button'>{cancelButtonText || 'Cancel'}</Button>
                    }
                    <Button className='font-weight-bold' color={'success'} type='submit'>{submitText || 'Submit'}</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default FormBuilder;
