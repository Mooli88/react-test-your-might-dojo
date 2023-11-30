import { fireEvent, getByDisplayValue, render, screen, within } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import ContactManager from './ContactManager'
import contactsData from './contacts.json'

// TODO: Fix code to make this test pass
test.each(contactsData)('Show $name email ($email) on select', ({ name, email }) => {
  render(<ContactManager contacts={contactsData} />)

  // Press on a contact name to show their email
  fireEvent.click(screen.getByRole('button', { name }))

  screen.getByLabelText('Email:', { selector: 'input' })
  screen.getByDisplayValue(email)
})

test('No warnings in console', () => {
  const consoleSpy = vi.spyOn(console, 'error')

  render(<ContactManager contacts={contactsData} />)

  expect(consoleSpy).not.toHaveBeenCalled()
})
