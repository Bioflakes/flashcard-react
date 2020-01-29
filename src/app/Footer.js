import React from 'react'
import _ from 'lodash'
import { Row, Col } from 'reactstrap'

const BLANK = ''

const plural = count => 
    count === 1 ? BLANK : 's'

const displayText = count => 
    _.join(['Total of ', count, ' questionnaire', plural(count)], BLANK)

const Footer = props => 
    <Row>
        <Col>{ props.message }</Col>
        <Col className='text-right'>{ displayText(props.count) }</Col>
    </Row>

export default Footer