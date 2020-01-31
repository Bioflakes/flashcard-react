import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import QuestionnaireTable from './QuestionnaireTable'
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog'

const ID = 'id'
const DEFAULT_ID = 0

const QuestionnaireContainer = ({serverURL}) => {

    let [qs, setQuestionnaires] = useState([])

    useEffect(() => {
        fetch(serverURL)
        .then(res => res.json())
        .then(setQuestionnaires)
        .catch(error => console.error(error))
    }, [])

    const id = qs => 
        _.get(_.maxBy(qs, ID), ID, DEFAULT_ID) + 1

    /*
    const create = questionnaire => 
       setQuestionnaires( _.concat(qs, { id: id(qs), ...questionnaire }))
       */

    const create = async questionnaire => {
        const request = await fetch(serverURL, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json; charset=utf-8'
            }),
            body: JSON.stringify(questionnaire)
        });

        if(request.ok) {
            questionnaire = await request.json()
            setQuestionnaires(_.concat(qs, questionnaire))
        }
        else {
            console.log(`Request nicht erfolgreich. Status: ${ request.status }`)
        }
    }


    /*
    const update = questionnaire =>
        setQuestionnaires(_.map(qs, q => q.id === questionnaire.id ? questionnaire : q))
    */

    const update = async questionnaire => {
        fetch(`${serverURL}/${questionnaire.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(questionnaire)
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Network response was not ok.');
        })
        .then(questionnaire => setQuestionnaires(_.map(qs, q => q.id === questionnaire.id ? questionnaire : q)))
        .catch(error => console.error(error))
    }

    /*
    const _delete = id =>
        setQuestionnaires( _.reject(qs, { id: id }))
        */

        
    const _delete = id => {
        fetch(`${serverURL}/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                setQuestionnaires( _.reject(qs, { id: id }))
            }
            else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => console.error(error))
    }

    return <div>
            <QuestionnaireCreateDialog create={ create } />
            <h3>Questionnaires</h3>
            <QuestionnaireTable qs={ qs } update={ update } _delete={ _delete } />
        </div>
}

export default QuestionnaireContainer