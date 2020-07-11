import React, { useState } from 'react'
import { Header } from './components/Header'
import './custom.scss'
import { PostQuestion } from './pages/PostQuestion'
import { NavBar } from './components/NavBar'
import { Route, Switch } from 'react-router-dom'
import { Questions } from './pages/Questions'
import { AnswerQuestion } from './pages/AnswerQuestion'

export function App() {
  const [activeFilter, setActiveFilter] = useState('')

  return (
    <>
      <NavBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <main className="container-fluid p-4">
        <Header />
        <Switch>
          <Route exact path="/">
            <Questions activeFilter={activeFilter} />
          </Route>
          <Route exact path="/questions/ask">
            <PostQuestion />
          </Route>
          <Route exact path="/questions/answer/:id">
            <AnswerQuestion />
          </Route>
        </Switch>
      </main>
    </>
  )
}
