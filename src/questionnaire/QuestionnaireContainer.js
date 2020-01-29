import React from 'react'
import QuestionnaireTable from './QuestionnaireTable'

const QuestionnaireContainer = ({ qs }) =>
    <div>
        <h3>Questionnaires</h3>
        <QuestionnaireTable qs={ qs } />
    </div>


export default QuestionnaireContainer