import React, { useEffect, useState } from 'react'
import { getNewsList, getItem } from '../api'
import { getListApiCalls } from '../utils'

export interface INews {
  by: string
  id: number
  score: number
  text?: string
  time: number
  title?: string
  type?: string
  url?: string
  kids?: number[]
}

export const useApiCall = () => {
  const [news, setNews] = useState<INews[] | []>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const callback = async () => {
      const idList = await getNewsList()
      getListApiCalls(idList.slice(0, 101), setNews)
      setLoading(false)
    }

    callback()
    return () => setNews([])
  }, [])

  return { news, loading }
}
