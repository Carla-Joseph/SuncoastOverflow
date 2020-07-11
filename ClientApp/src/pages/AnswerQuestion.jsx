import React, { useParams, useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function AnswerQuestionComponent({ match }) {
  const [name, setName] = useState(null)
  const [language, setLanguage] = useState(null)
  const [question, setQuestion] = useState(null)
  const [answer, setAnswer] = useState(null)
  const { id } = match.params

  useEffect(() => {
    fetch(`https://localhost:5001/api/Questions/${id}`)
      .then(response => response.json())
      .then(data => {
        const { id, name, language, question } = data
        setName(name)
        setLanguage(language)
        setQuestion(question)
      })
  }, [id])

  function handleAnswerChanged(event) {
    setAnswer(event.target.value)
  }

  function handleSubmitAnswer() {}

  return (
    <>
      <div>
        <h3>Technology Language:</h3>
        {language}
      </div>
      <div>
        <h3>Name:</h3>
        {name}
      </div>
      <div>
        <h3>Question:</h3>
        {question}
      </div>
      <div>
        <h3>Answer question:</h3>
        <input
          placeholder="Your answer here..."
          onChange={handleAnswerChanged}
        />
        <button onClick={handleSubmitAnswer}>Submit answer</button>
      </div>
    </>
  )
}

export const AnswerQuestion = withRouter(AnswerQuestionComponent)
