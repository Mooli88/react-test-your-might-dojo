import { useMemo, useState } from 'react'

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
