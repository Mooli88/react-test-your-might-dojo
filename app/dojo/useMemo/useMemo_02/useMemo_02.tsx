import { useMemo, useState } from "react";
import RenderCounter from "../../../RenderCounter";

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
 * Do you think we need to use useMemo hook in this case?
 * If yes, why? (add comment down below)
 *
 * Gotchas: 01
 */

type Queue = {
  id: string;
  value: number;
  priority: "low" | "medium" | "high";
};

type CounterProps = {
  id?: string;
  items: Queue[];
};

//////////////////////
///// QueueList /////
////////////////////

const QueueList = ({ items, id = "useMemo_#2_queue-list" }: CounterProps) => {
  const memoizedQueueList = useMemo(() => {
    return items.map(
      ({ value, priority }) => `Queue No#${value}-priority-${priority}_${id}`
    );
  }, [items.length, id]);

  return (
    <div data-testid={id}>
      <ul>
        {memoizedQueueList.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
      <RenderCounter id={`${id}-render-counter`} />
    </div>
  );
};

/////////////////////////
////// UseMemoNo2 //////
///////////////////////

export const UseMemoNo2 = () => {
  const [qList, setQList] = useState<Queue[]>([]);

  const addToQueue = () => {
    if (qList.length < 100)
      setQList((q) => [
        ...q,
        {
          id: `q_${q.length + 1}`,
          value: q.length + 1,
          priority: "low",
        },
      ]);
  };

  const changePriority = (id: string, priority: "low" | "medium" | "high") => {
    setQList((q) =>
      q.map((item) => {
        if (item?.id === id) {
          return {
            ...item,
            priority,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <button onClick={addToQueue}>Add To Queue</button>
      <button onClick={() => changePriority(`q_${1}`, "high")}>
        Change Queue item priority
      </button>
      <QueueList items={qList} />

      <RenderCounter id="useMemo_#2-render-counter" />
    </div>
  );
};

/**
 * Write your answer here:
 *
 *
 *
 *
 *
 */
