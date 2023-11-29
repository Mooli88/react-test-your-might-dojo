import { useMemo, useState } from 'react'
import RenderCounter from '../../../RenderCounter'

/**
 * In this code snippet, UseMemoNo2 component renders QueueList and RenderCounter component.
 * The QueueList component receives a list of Queue items as props and renders them.
 * The RenderCounter component renders the number of times it has been rendered.
 *
 * UseMemoNo2 component adds a new Queue item to the list of Queue item by pressing the "Add To Queue" button
 * The QueueList component has a useMemo hook that returns a list of queue numbers based on the items props.
 *
 * Tasks:
 * 1. Change the code accordingly based on your useMemo understanding.
 * 2. Try to improve the performance outside by remove redundant code. (optional)
 * 3. Run the tests and check if they passing. (its ok to proceed if they are not)
 * 4. Explain your solution in the comments section below.
 *
 * Hint:
 *  - Open to interpretation: true
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

const QueueList = ({ items, id = 'useMemo_#2_queue-list' }: QueueListProps) => {
  const memoizedQueueList = useMemo(() => {
    return items.map(({ value, priority }) => `Queue No#${value}-priority-${priority}_${id}`)
  }, [items, id])

  return (
    <div data-testid={id}>
      <ul>
        {memoizedQueueList.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
      <RenderCounter id={`${id}-render-counter`} />
    </div>
  )
}

// ///////////////////////
// //// UseMemoNo2 //////
// /////////////////////

export const UseMemoNo2 = () => {
  const [qList, setQList] = useState<Queue[]>([])

  const addToQueue = () => {
    if (qList.length < 100)
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
      <button onClick={addToQueue}>Add To Queue</button>
      <QueueList items={qList} />

      <RenderCounter id='useMemo_#2-render-counter' />
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
