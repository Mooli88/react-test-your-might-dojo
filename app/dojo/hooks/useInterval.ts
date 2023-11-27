import { useEffect, useRef } from 'react'

type useIntervalType = (callback: () => void, delay: number) => void

const useInterval: useIntervalType = (callback, delay) => {
  const savedCallback = useRef(callback)

  savedCallback.current = callback

  useEffect(() => {
    const intervalId = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(intervalId)
  }, [delay])
}

export default useInterval
