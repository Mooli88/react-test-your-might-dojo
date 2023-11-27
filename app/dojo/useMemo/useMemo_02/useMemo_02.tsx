import { useMemo, useState } from 'react'
import RenderCounter from '../../../RenderCounter'

/**
 * In this code snippet, we have a UseMemoNo2 component that renders a QueueList component.
 * The QueueList component receives a list of Queue items as props.
 *
 * UseMemoNo2 component has two buttons:
 * - Add To Queue: adds a new Queue item to the list of Queue items.
 * - Change Queue item priority: changes the priority of the first Queue item in the list.
 *
 * The QueueList component has a useMemo hook that returns a list of queue numbers based on the items props.
 *
 * Tasks:
 * 1. Change the code accordingly based on your useMemo understanding.
 * 2. Run the tests and see that they are passing. (its ok to proceed if they are not)
 * 3. Write down your thoughts on your solution in the comments below.
 *
 * Hint:
 *  - Gotchas: 0
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

  const changePriority = (id: string, priority: 'low' | 'medium' | 'high') => {
    setQList((q) =>
      q.map((item) => {
        if (item?.id === id) {
          return {
            ...item,
            priority,
          }
        }
        return item
      }),
    )
  }

  return (
    <div>
      <button onClick={addToQueue}>Add To Queue</button>
      <button onClick={() => changePriority(`q_${1}`, 'high')}>Change Queue item priority</button>
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
