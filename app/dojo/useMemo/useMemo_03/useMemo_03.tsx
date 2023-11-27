import { useState } from 'react'
import RenderCounter from '../../../RenderCounter'
import useInterval from '../../hooks/useInterval'

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
  const list = items.map(({ value, priority }) => `Queue No#${value}-priority-${priority}_${id}`)

  return (
    <div data-testid={id}>
      <ul>
        {list.map((q) => (
          <li key={q}>{q}</li>
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
