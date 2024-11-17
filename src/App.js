import logo from './logo.svg';
import './App.css';
import './Question.css';
import { Question } from './Question.js'
import { useState } from 'react';

function App() {
  const [question, setAnswer] = useState([

    {
      sawal: "What is the capital of France?",
      jawab: "Paris",
    },
    {
      sawal: "What is the capital of Germany?",
      jawab: "Berlin",
    },
    {
      sawal: "What is the capital of Italy?",
      jawab: "Rome",
    },
    {
      sawal: "What is the capital of Spain?",
      jawab: "Madrid",
    },
    {
      sawal: "What is the capital of Portugal?",
      jawab: "Lisbon",
    },
    {
      sawal: "What is the capital of France?",
      jawab: "Paris",
    },
    {
      sawal: "What is the capital of Germany?",
      jawab: "Berlin",
    },
    {
      sawal: "What is the capital of Italy?",
      jawab: "Rome",
    },
    {
      sawal: "What is the capital of Spain?",
      jawab: "Madrid",
    },
    {
      sawal: "What is the capital of Portugal?",
      jawab: "Lisbon",
    }

  ])
  return (
    
      <Question question={question} setAnswer={setAnswer} />
    
  );
}

export default App;
