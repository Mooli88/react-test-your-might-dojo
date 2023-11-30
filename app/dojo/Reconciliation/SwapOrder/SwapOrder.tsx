import { CSSProperties, useState } from 'react'

const style: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
}
const SwapOrder = () => {
  const [reverse, setReverse] = useState(false)
  const checkbox = (
    <label>
      <input type='checkbox' checked={reverse} onChange={(e) => setReverse(e.target.checked)} />
      Reverse order
    </label>
  )

  return reverse ? (
    <Container>
      <Field label='Last name' />
      <Field label='First name' />
      {checkbox}
    </Container>
  ) : (
    <Container>
      <Field label='First name' />
      <Field label='Last name' />
      {checkbox}
    </Container>
  )
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={style}>
    <pre>Reproduce bug: Change field value and reverse</pre>
    {children}
  </div>
)

type Props = {
  label: string
}

function Field({ label }: Props) {
  const [text, setText] = useState('')
  return (
    <label>
      {label}:{' '}
      <input
        type='text'
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  )
}

export default SwapOrder
