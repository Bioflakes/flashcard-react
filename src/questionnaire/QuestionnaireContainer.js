import React, { useState } from 'react'
import _ from 'lodash'
import { Col, Row } from 'reactstrap'
import QuestionnaireTable from './QuestionnaireTable'
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog'

const ID = 'id'
const DEFAULT_ID = 0

const QuestionnaireContainer = props => {

    let [qs, setQS] = useState(props.qs)

    const id = qs => 
        _.get(_.maxBy(qs, ID), ID, DEFAULT_ID) + 1
    
    const create = questionnaire => 
        this.setState({ qs: _.concat(qs, { id: id(qs), ...questionnaire }) })
    
    const update = questionnaire =>
        setQS(_.map(qs, q => q.id === questionnaire.id ? questionnaire : q))

    const _delete = id =>
        setQS( _.reject(qs, { id: id }))
    
        return <div>
            <Row>
                <Col><h3>Questionnaires</h3></Col>
                <Col><QuestionnaireCreateDialog create={ create } /></Col>
            </Row>
            <QuestionnaireTable qs={ qs } update={ update } _delete={ _delete }/>
        </div>
    
}



export default QuestionnaireContainer