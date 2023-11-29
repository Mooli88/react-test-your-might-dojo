import { useEffect } from 'react'

type Props = {
  impressionTracker: (propA: string, propB: string, propC: string) => void
  propA: string
  propB: string
  propC: string
}

const AwesomeComponent = ({ propA, propB, propC }: Omit<Props, 'impressionTracker'>) => (
  <>
    <div>{propA}</div>
    <div>{propB}</div>
    <div>{propC}</div>
  </>
)

export const App = ({ impressionTracker, propA, propB, propC }: Props) => {
  useEffect(() => {
    // 👇Track initial props value
    impressionTracker(propA, propB, propC)
  }, [])

  return <AwesomeComponent propA={propA} propB={propB} propC={propC} />
}
