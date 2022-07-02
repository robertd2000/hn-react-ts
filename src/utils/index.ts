import { getItem } from '../api'
import { INews } from '../hooks/useApiCall'

export const getListApiCalls = async (
  idList: number[],
  setResult: React.Dispatch<React.SetStateAction<[] | INews[]>>
) => {
  console.log(idList)

  try {
    Promise.all(
      idList.map(async (itemId) => {
        const res = await getItem(itemId + '')

        setResult((prev) => [...prev, res])
      })
    )
  } catch (error) {
    throw 'err'
  }
}
