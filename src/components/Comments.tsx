import React from 'react'
import { useComments } from '../hooks/useComments'
import { ListItem } from './ListItem'

interface IComments {
  commentsId: number[] | []
}

export const Comments = ({ commentsId }: IComments) => {
  const { comments } = useComments(commentsId)

  console.log(comments)

  return (
    <div>
      {comments.map((i) => (
        <ListItem
          key={i.id + Math.random()}
          title={i?.text}
          by={i.by}
          id={i.id}
          score={i.score}
          time={i.time}
        />
      ))}
    </div>
  )
}
