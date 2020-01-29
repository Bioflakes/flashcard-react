import React, { Component } from 'react'
import _ from 'lodash'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input } from 'reactstrap'

class QuestionnaireCreateDialog extends Component {
    constructor(props) {
        super(props)
        this.state = { showModal: false, title: '', description: '' }
    }

    // [event.target.name]: Computed property names, siehe https://mzl.la/1GIMi82
    change = event => 
        this.setState({ [event.target.name]: event.target.value })

    create = () => {
        this.props.create(_.pick(this.state, ['title', 'description']))
        this.close()
    }

    close = () => 
        this.setState({ showModal: false, title: '', description: '' })

    open = () => 
        this.setState({ showModal: true })

    render() {
        return (
            <div>
                <Button onClick={ this.open } className="float-right" color='success'>
                    Add Questionnaire</Button>
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
                                    <Input onChange={ this.change } 
                                           type="text" id="formTitle" 
                                           name='title' 
                                           value={ this.state.title }  />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label md={ 2 } for="formDescription">
                                    Description
                                </Label>
                                <Col md={ 10 }>
                                    <Input onChange={ this.change } 
                                           type="text" 
                                           id="formDescription" 
                                           name='description'
                                           value={ this.state.description }  />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col className="clearfix" style={ { padding: '.2rem' } }>
                                    <Button className="float-right" color="secondary"
                                        onClick={ this.create }>Save</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default QuestionnaireCreateDialog
