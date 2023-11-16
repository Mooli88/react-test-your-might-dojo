import { useMemo, useState } from "react";
import RenderCounter from "../../../RenderCounter";

type CounterProps = {
  id?: string;
  items: number[];
};

const QueueList = ({ items, id = "useMemo_#2_queue-list" }: CounterProps) => {
  const memoizedQueueList = useMemo(() => {
    return items.map((q) => `Queue No#${q}-${id}`);
  }, [items, id]);

  return (
    <div data-testid={id}>
      <ul>
        {memoizedQueueList.map((q, i) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
      <RenderCounter id={id} />
    </div>
  );
};

export const UseMemoNo2 = () => {
  const [qList, setQList] = useState<number[]>([]);

  const addToQueue = () => {
    if (qList.length < 100) setQList((q) => [...q, q.length + 1]);
  };

  return (
    <div>
      <QueueList items={qList} />
      <button onClick={addToQueue}>Add To Queue</button>

      <RenderCounter id="useMemo_#2" />
    </div>
  );
};
