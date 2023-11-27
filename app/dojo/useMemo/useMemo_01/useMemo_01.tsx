import { useMemo, useState } from 'react'
import RenderCounter from '../../../RenderCounter'

type CounterProps = {
  id?: string
  value: number
}

const Counter = ({ value, id = 'useMemo_#1_counter' }: CounterProps) => {
  const memoizedCounterText = useMemo(() => {
    return `Counter: ${value} - ${id}`
  }, [value, id])

  return (
    <div data-testid={id}>
      <p>{memoizedCounterText}</p>
      <RenderCounter id={id} />
    </div>
  )
}

export const UseMemoNo1 = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter value={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
