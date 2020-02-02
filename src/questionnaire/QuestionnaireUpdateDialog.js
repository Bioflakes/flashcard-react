import React from 'react'
import Dialog from './Dialog';

const QuestionnaireUpdateDialog =  ({ questionnaire, update }) => 
  <Dialog 
    buttonLabel='Edit' 
    title='Edit Questionnaire' 
    actionButtonLabel='Save'
    questionnaire={ questionnaire } 
    actionFn={ update } 
    css='primary' />

export default QuestionnaireUpdateDialog
