import { useState } from 'react'

const SwapOrder = () => {
  const [reverse, setReverse] = useState(false)
  const checkbox = (
    <label>
      <input type='checkbox' checked={reverse} onChange={(e) => setReverse(e.target.checked)} />
      Reverse order
    </label>
  )
  if (!reverse) {
    return (
      <form>
        <Field label='Last name' />
        <Field label='First name' />
        {checkbox}
      </form>
    )
  } else {
    return (
      <form>
        <Field label='First name' />
        <Field label='Last name' />
        {checkbox}
      </form>
    )
  }
}

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
