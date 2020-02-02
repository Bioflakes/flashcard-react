import React from 'react'
import Dialog from './Dialog';

const QuestionnaireShowDialog = ({questionnaire}) =>
    <Dialog 
    buttonLabel="Show"
    title="Show Questionnaire"
    actionButtonLabel="Close"
    questionnaire={ questionnaire }
    isReadOnly={true}>
    </Dialog>

export default QuestionnaireShowDialog
