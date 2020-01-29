import React from 'react'
import _ from 'lodash'
import { Container } from 'reactstrap'

import Header from './Header'
import QuestionnaireContainer from '../questionnaire/QuestionnaireContainer'
import Footer from './Footer'

const App = ({ qs }) => 
    <Container>
        <Header title='Flashcard Client with React' subtitle='Version 1' />
        <QuestionnaireContainer qs={ qs } />
        <Footer message='@ The FHNW Team' count={ _.size(qs) } />
    </Container>

App.defaultProps = {
    qs:[
      {'id': 1, 'title': 'Test Title 1', 'description': 'Test Description 1'},
      {'id': 2, 'title': 'Test Title 2', 'description': 'Test Description 2'},
      {'id': 3, 'title': 'Test Title 3', 'description': 'Test Description 3'},
      {'id': 4, 'title': 'Test Title 4', 'description': 'Test Description 4'},
      {'id': 5, 'title': 'Test Title 5', 'description': 'Test Description 5'}
    ]
  }

export default App
