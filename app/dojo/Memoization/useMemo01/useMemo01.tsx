import { useMemo, useState } from 'react'

/**
 * In this code snippet, UseMemoNo1 component renders the Counter component.
 * The Counter component receives a value prop, add text to it and renders it.
 *
 * UseMemoNo1 component increment count by pressing the "Increment" button.
 *
 * Tasks:
 * 1. Change the code accordingly based on your useMemo understanding.
 * 3. Run the tests and check if they passing.
 * 4. Explain your solution in the comments section below.
 */

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

/**
 * Write the reason for your solution in here:
 *
 *
 *
 *
 *
 */
