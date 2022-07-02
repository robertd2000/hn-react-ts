import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getItem } from '../api'
import { Comments } from '../components/Comments'
import { ItemCard } from '../components/ItemCard'
import { INews } from '../hooks/useApiCall'

export const Item = () => {
  const { id = '' } = useParams()

  // const { title, id, by, time } = l.state as INews
  const [item, setitem] = useState<INews>({
    title: '',
    time: 0,
    text: '',
    by: '',
    id: 0,
    score: 0,
    kids: [],
  })

  useEffect(() => {
    const f = async () => {
      const res = await getItem(id)
      setitem(res)
    }

    f()
  }, [id])

  return (
    <div className="card">
      <ItemCard
        title={item?.title}
        time={item.time}
        by={item.by}
        text={item.text}
        id={item.id}
        score={item.score}
      />
      <Comments commentsId={item.kids?.slice(0, 101) || []} />
    </div>
  )
}
