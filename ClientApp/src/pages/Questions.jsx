import React from 'react'
import { Link } from 'react-router-dom'

export function Questions() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            4 Questions
          </li>
        </ol>
      </nav>
      <div className="list-group">
        <Link
          to="/questions/22"
          className="list-group-item list-group-item-action"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">HTML Questions</h5>
            <small>5 Reviews</small>
          </div>
          <p className="mb-1">Answer</p>
          <small className="mr-3">
            <button className="btn btn-success btn-sm">
              <span className="mr-2" role="img" aria-label="upvote">
                👍🏻
              </span>
              5
            </button>
          </small>
          <small className="mr-3">
            <button className="btn btn-danger btn-sm">
              <span className="mr-2" role="img" aria-label="downvote">
                👎🏻
              </span>
              3
            </button>
          </small>
        </Link>

        <Link
          to="/questions/22"
          className="list-group-item list-group-item-action"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Javascript Questions</h5>
            <small>2 Reviews</small>
          </div>
          <p className="mb-1">Answer</p>
          <small className="mr-3">
            <button className="btn btn-success btn-sm">
              <span className="mr-2" role="img" aria-label="upvote">
                👍🏻
              </span>
              7
            </button>
          </small>
          <small className="mr-3">
            <button className="btn btn-danger btn-sm">
              <span className="mr-2" role="img" aria-label="downvote">
                👎🏻
              </span>
              9
            </button>
          </small>
        </Link>
      </div>
    </>
  )
}
