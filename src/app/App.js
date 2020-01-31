import React from 'react'
import _ from 'lodash'
import { Container } from 'reactstrap'

import Header from './Header'
import QuestionnaireContainer from '../questionnaire/QuestionnaireContainer'
import Footer from './Footer'

const App = props => 

    <Container>
        <Header title='Flashcard Client with React' subtitle='Version 1' />
        <QuestionnaireContainer serverURL={ "http://localhost:8080/flashcard-mvc/questionnaires" }/>
        <Footer message='@ The FHNW Team'/>
    </Container>




export default App
