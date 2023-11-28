import { useState } from 'react'
import RenderCounter from '../../../RenderCounter'
import useInterval from '../../hooks/useInterval'

/**
 * In this code snippet, UseMemoNo3 component renders the QueueList and Counter, and RenderCounter components.
 * Counter has same functionality as in exercise 1.
 * QueueList has functionality same as in exercise 2.
 *
 * UseMemoNo3 component has the same Add To Queue button as in exercise 2 and a new hook called
 * useInterval. useInterval hook increments a counter every 100ms.
 *
 * Tasks:
 * 1. Change the code accordingly based on your useMemo understanding.
 * 2. Run the tests and check if they passing. (its ok to proceed if they are not)
 * 3. Explain your solution in the comments section below.
 *
 * Bonus: Suggest at least 2 solutions and pick the best one
 *
 * Hint:
 *  - Open to interpretation: false (unless you really thinks otherwise :) )
 */

type Queue = {
  id: string
  value: number
  priority: 'low' | 'medium' | 'high'
}

// ////////////////////
// /// QueueList /////
// //////////////////

type QueueListProps = {
  id?: string
  items: Queue[]
}

export const QueueList = ({ items, id = 'useMemo_#3_queue-list' }: QueueListProps) => {
  return (
    <div data-testid={id}>
      <ul>
        {items.map(({ value, priority }) => (
          <li key={value}>
            Queue No#{value}-priority-{priority}_{id}
          </li>
        ))}
      </ul>
      <RenderCounter id={`${id}-render-counter`} />
    </div>
  )
}

// ////////////////////
// /// CounterProps /////
// //////////////////

type CounterProps = {
  id?: string
  value: number
}

export const Counter = ({ value, id = 'useMemo_#3_counter' }: CounterProps) => {
  const counterText = `Counter: ${value} - ${id}`

  return (
    <div data-testid={id}>
      <p>{counterText}</p>
      <RenderCounter id={`${id}-render-counter`} />
    </div>
  )
}

// ////////////////////
// /// UseMemoNo3 /////
// //////////////////

export const UseMemoNo3 = () => {
  const [qList, setQList] = useState<Queue[]>([])
  const [count, setCount] = useState(0)

  // Increment count every 100ms
  useInterval(() => {
    setCount(count + 1)
  }, 100)

  const addToQueue = () => {
    if (qList.length < 500)
      setQList((q) => [
        ...q,
        {
          id: `q_${q.length + 1}`,
          value: q.length + 1,
          priority: 'low',
        },
      ])
  }

  return (
    <div>
      <QueueList items={qList} />
      <button onClick={addToQueue}>Add To Queue</button>

      <Counter value={count} />
      <RenderCounter id='useMemo_#3-render-counter' />
    </div>
  )
}
