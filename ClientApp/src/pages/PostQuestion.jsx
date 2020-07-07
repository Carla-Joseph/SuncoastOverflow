import React from 'react'

export function PostQuestion() {
  return (
    <div className="card">
      <div className="card-header">Ask a Question</div>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>

        <div className="form-group">
          <label htmlFor="name">Language</label>
          <input type="text" className="form-control" id="name" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Ask a Question</label>
          <textarea type="text" className="form-control" id="description" />
          <small id="descriptionHelp" className="form-text text-muted"></small>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}
