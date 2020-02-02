import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import QuestionnaireTable from './QuestionnaireTable'
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog'
import doFetch from '../network/NetworkUtil'
import Message from '../app/Message'
import Loader from '../app/Loader'

const headers = { headers: { 'Content-Type': 'application/json; charset=utf-8' } }

/**
 * Die Questionnaire Funktionalität (Crerate, Tabelle der Questionnaires).
 * 
 * @param {string} serverUrl Die URL des Backends
 */
const QuestionnaireContainer = ({ serverURL }) => {

    let [qs, setQuestionnaires] = useState([])
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const readAll = () => {
        doFetch({
            url: serverURL,
            dataFn: setQuestionnaires,
            errorFn: setError,
            messageFn: setMessage,
            loadingFn: setLoading,
            errorText: 'Not Found'
        })
    }

    useEffect(readAll, [])

    const create = async questionnaire => {
        doFetch({
            url: serverURL,
            requestObject: { method: 'POST', body: JSON.stringify(questionnaire), ...headers },
            dataFn: questionnaire => setQuestionnaires( _.concat(qs, questionnaire)),
            errorFn: setError,
            messageFn: setMessage,
            loadingFn: setLoading,
            errorText: 'Creation failed.'
        })
    }

    const update = questionnaire => {
        doFetch({
            url: `${ serverURL }/${ questionnaire.id }`,
            requestObject: { method: 'PUT', body: JSON.stringify(questionnaire), ...headers },
            dataFn: questionnaire => setQuestionnaires(_.map(qs, q => q.id === questionnaire.id ? questionnaire : q)),
            errorFn: setError,
            messageFn: setMessage,
            loadingFn: setLoading,
            errorText: 'Not found, or update failed.'
        })
    }

    const _delete = id => {
        doFetch({
            url: `${ serverURL }/${ id }`,
            requestObject: { method: 'DELETE' },
            dataFn: () =>  setQuestionnaires( _.reject(qs, { id: id })),
            errorFn: setError,
            messageFn: setMessage,
            loadingFn: setLoading,
            errorText: 'Not found, or delete failed.'
        })
    }

    const renderMessage = () => 
        error ? <Message message={ message } /> : null

    const renderQuestionnaireTable = (qs, update, _delete) => 
        loading ? <Loader /> : <QuestionnaireTable qs={ qs } update={ update } _delete={ _delete } />

    return <div>
            <QuestionnaireCreateDialog create={ create } />
            <h3>Questionnaires</h3>
            { renderMessage() }
            { renderQuestionnaireTable(qs, update, _delete) }
        </div>
}

export default QuestionnaireContainer