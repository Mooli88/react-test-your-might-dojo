import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import { CleanupSideEffectOnUnmount } from './CleanupSideEffectOnUnmount'

beforeEach(() => {
  vi.useFakeTimers()
})
afterEach(() => {
  vi.restoreAllMocks()
})

test('CleanupSideEffectOnUnmount should cleanup side effects on unmount', async () => {
  const consoleLogSpy = vi.spyOn(console, 'log')
  render(<CleanupSideEffectOnUnmount />)

  await act(() => vi.advanceTimersByTimeAsync(500))

  const toggleAsyncOpBtn = screen.getByRole('button', { name: 'Toggle AsyncOp' })

  fireEvent.click(toggleAsyncOpBtn)

  screen.getByText('None')

  await act(() => vi.advanceTimersByTimeAsync(510))

  expect(consoleLogSpy).not.toHaveBeenCalledWith('res', { id: '1' })
})
