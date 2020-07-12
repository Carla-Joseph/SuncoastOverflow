import React, { useState } from 'react'
import { useHistory } from 'react-router'

export function PostQuestion() {
  const history = useHistory()

  const [errorMessage, setErrorMessage] = useState()

  const [name, setName] = useState('')
  const [language, setLanguage] = useState('')
  const [question, setQuestion] = useState('')

  function postTheQuestion() {
    const requestBody = {
      name,
      language,
      question,
    }
    fetch('https://localhost:5001/api/Questions', {
      headers: {
        accept: 'text/plain',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
      referrer: 'https://localhost:5001/swagger/index.html',
      referrerPolicy: 'no-referrer-when-downgrade',
      body: JSON.stringify(requestBody),
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    })
    
      history.push('/')

  }

  return (
    <div className="card">
      <div className="card-header">Ask a Question</div>
      <div className="card-body">
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={event => setName(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Technology Language</label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={event => setLanguage(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Ask a Question</label>
        <textarea
          type="text"
          className="form-control"
          id="description"
          onChange={event => setQuestion(event.target.value)}
        />
        <small id="descriptionHelp" className="form-text text-muted"></small>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => postTheQuestion()}
      >
        Submit
      </button>
    </div>
  )
}
