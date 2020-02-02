import React, {useState, useEffect} from 'react'
import { Container } from 'reactstrap'
import Message from './Message';


import Header from './Header'
import QuestionnaireContainer from '../questionnaire/QuestionnaireContainer'
import Footer from './Footer'
import doFetch from "../network/NetworkUtil";


const App = () => {


    const [config, setConfig] = useState(null);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        doFetch({
            url: "application.json",
            dataFn: setConfig,
            errorFn: setError,
            messageFn: setMessage,
            errorText: "Konfigurationsfehler"
        })
    }, [])

    const renderQuestionnaireContainer = config =>
        config ? <QuestionnaireContainer serverURL={`${ config.url }/questionnaires` }/> : null

    const renderMessage = () => 
        error ? <Message message={ message }/> : null

    return <Container>
        <Header title='Flashcard Client with React' subtitle='Version 1' />
        { renderQuestionnaireContainer(config)}
        { renderMessage() }
        <Footer message='@ The FHNW Team'/>
    </Container>
}






export default App
