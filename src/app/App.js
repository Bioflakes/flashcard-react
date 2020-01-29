import React from 'react';
import Header from './Header';
import QuestionnaireController from '../questionnaire/QuestionnaireContainer';
import Footer from './Footer';

function App() {
  return (
      <div>
        <Header title="Flashcard Client with React" subtitle="Version 1"></Header>
        <QuestionnaireController></QuestionnaireController>
        <Footer message="&copy; The FHNW Team"></Footer>
      </div>
  );
}

export default App;
