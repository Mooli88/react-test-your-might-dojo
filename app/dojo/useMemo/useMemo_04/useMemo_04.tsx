/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from 'react'
import RenderCounter from '../../../RenderCounter'
import useInterval from '../../hooks/useInterval'

/**
 * In this code snippet, UseMemoNo4 component renders a QueueList component.
 * The QueueList component receives a list of Queue items as props.
 *
 * UseMemoNo4 component has two buttons:
 * - Add To Queue: adds a new Queue item to the list of Queue items.
 * - Change Queue item priority: changes the priority of the first Queue item in the list.
 *
 * For this exercise, assume QueueList should use useMemo hook.
 *
 * Tasks:
 * 1. Change the code accordingly based on your useMemo understanding.
 * 2. Run the tests and check if they passing. (its ok to proceed if they are not)
 * 3. Explain your solution in the comments section below.
 *
 * Hint:
 *  - Gotchas: 1
 *  - Open to interpretation: false
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

const QueueList = ({ items, id = 'useMemo_#4_queue-list' }: QueueListProps) => {
  const memoizedQueueList = useMemo(() => {
    return items.map(({ value, priority }) => `Queue No#${value}-priority-${priority}_${id}`)
  }, [items.length, id])

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
// //// UseMemoNo4 //////
// /////////////////////

export const UseMemoNo4 = () => {
  const [qList, setQList] = useState<Queue[]>([])
  const [, setPretendState] = useState({})

  useInterval(() => {
    setPretendState({})
  }, 100)

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

      <RenderCounter id='useMemo_#4-render-counter' />
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
