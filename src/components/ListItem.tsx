import React from 'react'
import { Card, ListGroup, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { INews } from '../hooks/useApiCall'

export const ListItem = ({ title, by, id, score, time }: INews) => {
  return (
    <ListGroup.Item>
      <Nav>
        <Nav.Link
          to={{
            pathname: `/item/${id}`,
          }}
          // state={
          //   {
          //     title,
          //     by,
          //     id,
          //     score,
          //     time,
          //   } as INews
          // }
          as={NavLink}
        >
          <Card border="0">
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Footer>
                <small>
                  {score} points by {by}{' '}
                  {new Date(time * 1000).toLocaleString()}
                </small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Nav.Link>
      </Nav>
    </ListGroup.Item>
  )
}
