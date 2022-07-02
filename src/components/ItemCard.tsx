import React from 'react'
import { INews } from '../hooks/useApiCall'

export const ItemCard = ({ title, time, text, by, score }: INews) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {score} points by {by} {new Date(time * 1000).toLocaleString()}
        </h6>
        <p className="card-text">{text}</p>
      </div>
    </div>
  )
}
