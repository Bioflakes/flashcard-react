import React, { Component } from 'react'
import _ from 'lodash'
import Dialog from './Dialog';

const QuestionnaireCreateDialog = ({ create }) => 
        <Dialog 
        buttonLabel="Add Questionnaire"
        title="Add Questionnaire"
        actionButtonLabel="Save"
        questionnaire={ { title: '', description: ''}}
        actionFn={ create }
        css="success">
        </Dialog>


export default QuestionnaireCreateDialog
