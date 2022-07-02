export const getNewsList = async (): Promise<number[]> => {
  const res = await fetch(
    'https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty'
  )
  const json = await res.json()
  return json
}

export const getItem = async (id: string) => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  )
  const json = await res.json()
  return json
}
