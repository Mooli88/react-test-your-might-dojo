import { useEffect, useState } from 'react'

let timeoutId: NodeJS.Timeout | null = null

const fetchData = () => {
  if (timeoutId) clearTimeout(timeoutId)

  return {
    abort: () => (timeoutId ? clearTimeout(timeoutId) : null),
    promise: new Promise<{ id: string }>((resolve) => {
      timeoutId = setTimeout(() => {
        resolve({ id: '1' })
      }, 1000)
    }),
  }
}

const AsyncOp = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const { promise } = fetchData()

    promise.then((res) => {
      setData(() => {
        console.log('res', res)
        return res.id
      })
    })
  }, [])

  return <div>{data}</div>
}

export const CleanupSideEffectOnUnmount = () => {
  const [showAsyncOp, setShowAsyncOp] = useState(true)

  return (
    <div>
      <button onClick={() => setShowAsyncOp(!showAsyncOp)}>Toggle AsyncOp</button>
      {showAsyncOp ? <AsyncOp /> : <span>None</span>}
    </div>
  )
}
