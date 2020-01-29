import React from 'react'
import QuestionnaireShowDialog from './QuestionnaireShowDialog';
import QuestionnaireUpdateDialog from './QuestionnaireUpdateDialog';
import {Button} from 'reactstrap';
import _ from 'lodash';

const QuestionnaireTableElement = ({ questionnaire, update, _delete }) => (
    <tr key={ questionnaire.id } >
        <td>{ questionnaire.id }</td>
        <td>{ questionnaire.title }</td>
        <td>{ questionnaire.description }</td>
        <td><QuestionnaireShowDialog questionnaire={ questionnaire }></QuestionnaireShowDialog></td>
        <td><QuestionnaireUpdateDialog update={ update } questionnaire={ questionnaire }></QuestionnaireUpdateDialog></td>
        <td><Button color='danger' 
                    onClick={ _.partial(_delete, questionnaire.id) } 
                    className='float-right' >Delete</Button>
        </td>
    </tr>
)

export default QuestionnaireTableElement