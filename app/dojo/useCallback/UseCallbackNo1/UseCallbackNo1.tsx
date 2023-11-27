import { useCallback } from 'react'

export const UseCallbackNo1 = () => {
  const logger = useCallback(() => {
    console.log('track event')
  }, [])

  return (
    <div>
      <h1>UseCallbackNo1</h1>
      <button onClick={logger}>Log</button>
    </div>
  )
}
