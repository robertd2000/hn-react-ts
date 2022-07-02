import React from 'react'
import { ListGroup, Spinner } from 'react-bootstrap'
import { ListItem } from '../components/ListItem'
import { useApiCall } from '../hooks/useApiCall'

export const Home = () => {
  const { news, loading } = useApiCall()
  console.log(news)

  if (loading) {
    return <Spinner animation="border" variant="primary" />
  }

  return (
    <div>
      <ListGroup>
        {news.map((i) => (
          <ListItem
            key={i.id + Math.random()}
            title={i.title}
            by={i.by}
            id={i.id}
            score={i.score}
            time={i.time}
          />
        ))}
      </ListGroup>
    </div>
  )
}
