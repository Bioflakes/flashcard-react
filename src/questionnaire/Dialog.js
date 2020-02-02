import React, { useEffect, useState } from 'react';
import _ from 'lodash'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Col } from 'reactstrap';
import InputGroup from './InputGroup';

const Dialog = ({buttonLabel, title, actionButtonLabel, questionnaire: qx, isReadOnly = false, actionFn, css}) => {

    let [showModal, setShowModal] = useState(false);
    let [questionnaire, setQuestionnaire] = useState(qx);

    useEffect(() => {
        setQuestionnaire(qx)
    }, [qx])

    const change = event =>
        setQuestionnaire({...questionnaire, [event.target.name]: event.target.value})

    const close = () =>
        setShowModal(false)

    const open = () =>
        setShowModal(true)

    const onAction = (questionnaire, actionFn) => {
        (actionFn || _.identity)(questionnaire)
        close()
    }

    return <div>
    <Button color={ css || 'secondary'} onClick={ open }
        className='float-right'>{ buttonLabel }</Button>
    <Modal isOpen={ showModal } toggle={ close } size='lg' autoFocus={false}>
        <ModalHeader toggle={ close } >
            { title }
        </ModalHeader>
        <ModalBody>
            <Form>
                <InputGroup 
                    label='Title'
                    id='formTitle'
                    changeFn={ change }
                    name='title'
                    value={ questionnaire.title }
                    isReadOnly={ isReadOnly }
                />

                <InputGroup 
                    label='Description'
                    id='formDescription'
                    changeFn={ change }
                    name='description'
                    value={ questionnaire.description }
                    isReadOnly={ isReadOnly }
                /> 

                <FormGroup>
                    <Col className='clearfix' style={{ padding: '.2rem' }}>
                        <Button className='float-right' color='secondary'
                            onClick={ _.partial(onAction, questionnaire, actionFn) }>{ actionButtonLabel }</Button>
                    </Col>
                </FormGroup>
            </Form>
        </ModalBody>
    </Modal>
</div>
}
export default Dialog;