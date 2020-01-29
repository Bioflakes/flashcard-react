import React, { Component } from 'react'
import _ from 'lodash'
import { Col, Row } from 'reactstrap'
import QuestionnaireTable from './QuestionnaireTable'
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog'

const ID = 'id'
const DEFAULT_ID = 0

class QuestionnaireContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { qs: this.props.qs }
    }

    id = qs => 
        _.get(_.maxBy(qs, ID), ID, DEFAULT_ID) + 1
    
    create = questionnaire => 
        this.setState({ qs: _.concat(this.state.qs, { id: this.id(this.state.qs), ...questionnaire }) })
 
    render() {
        return <div>
            <Row>
                <Col><h3>Questionnaires</h3></Col>
                <Col><QuestionnaireCreateDialog create={ this.create } /></Col>
            </Row>
            <QuestionnaireTable qs={ this.state.qs } />
        </div>
    }
}



export default QuestionnaireContainer