import React from 'react'
import { Header } from './components/Header'
import './custom.scss'
import { PostQuestion } from './pages/PostQuestion'
import { NavBar } from './components/NavBar'
import { Route, Switch } from 'react-router-dom'
import { Questions } from './pages/Questions'

export function App() {
  return (
    <>
      <NavBar />
      <main className="container-fluid p-4">
        <Header />
        <Switch>
          <Route exact path="/questions">
            <Questions />
          </Route>
          <Route path="/questions/ask">
            <PostQuestion />
          </Route>
        </Switch>
      </main>
    </>
  )
}
