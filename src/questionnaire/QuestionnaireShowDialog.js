import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input } from 'reactstrap'

class QuestionnaireShowDialog extends Component {
    constructor(props) {
        super(props)
        this.state = { showModal: false }
    }

    close = () => this.setState({ showModal: false })

    open = () => this.setState({ showModal: true })

    render() {
        return (
            <div>
                <Button color="secondary" onClick={ this.open }
                    className="float-right">Show</Button>
                <Modal isOpen={ this.state.showModal } toggle={ this.close } size="lg" autoFocus={false}>
                    <ModalHeader toggle={ this.close } >
                        Show Questionnaire
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label md={ 2 } for="formTitle">
                                    Title
                                </Label>
                                <Col md={ 10 }>
                                    <Input type="text" id="formTitle" 
                                           defaultValue={ this.props.questionnaire.title } 
                                           plaintext />                                        
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label md={ 2 } for="formDescription">
                                    Description
                                </Label>
                                <Col md={ 10 }>
                                    <Input type="text" id="formDescription" 
                                           defaultValue={ this.props.questionnaire.description } 
                                           plaintext />   
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col className="clearfix" style={ { padding: '.2rem' } }>
                                    <Button className="float-right" color="secondary"
                                        onClick={ this.close }>Close</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default QuestionnaireShowDialog
