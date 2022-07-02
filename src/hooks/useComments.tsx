import React, { useEffect, useState } from 'react'
import { getListApiCalls } from '../utils'
import { INews } from './useApiCall'

export const useComments = (commentsId: number[]) => {
  const [comments, setcomments] = useState<INews[] | []>([])
  useEffect(() => {
    const f = async () => {
      getListApiCalls(commentsId, setcomments)
    }

    f()

    return () => setcomments([])
  }, [commentsId])

  return { comments }
}
