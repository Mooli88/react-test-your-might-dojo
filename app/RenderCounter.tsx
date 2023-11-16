import { useRenderCount } from "@uidotdev/usehooks";

type Props = {
  id: string;
};

export default function RenderCounter({ id }: Props) {
  const renderCount = useRenderCount();
  return <pre data-testid={id}>render count - {renderCount}</pre>;
}
