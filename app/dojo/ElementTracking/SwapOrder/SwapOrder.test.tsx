import { fireEvent, render, screen, within } from '@testing-library/react'
import { expect, test } from 'vitest'
import SwapOrder from './SwapOrder'

// TODO: Fix code to make this test pass
test('reverse fields on check Reverse order', async () => {
  render(<SwapOrder />)

  // Enter John in First name field
  fireEvent.input(screen.getByPlaceholderText('First name'), {
    target: { value: 'John' },
  })

  // Enter Doe in Last name field
  fireEvent.input(screen.getByPlaceholderText('Last name'), {
    target: { value: 'Doe' },
  })

  // Expected Output
  expect(screen.getAllByRole('textbox')).toMatchInlineSnapshot(`
    [
      <input
        placeholder="Last name"
        type="text"
        value="Doe"
      />,
      <input
        placeholder="First name"
        type="text"
        value="John"
      />,
    ]
  `)

  // Check Reverse order checkbox
  fireEvent.click(screen.getByLabelText('Reverse order'))

  // Expected Output: Fields should be reversed and values should be retained
  expect(screen.getAllByRole('textbox')).toMatchInlineSnapshot(`
    [
      <input
        placeholder="First name"
        type="text"
        value="John"
      />,
      <input
        placeholder="Last name"
        type="text"
        value="Doe"
      />,
    ]
  `)
})
