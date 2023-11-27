import { act, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import * as React from 'react'
import { UseMemoNo3 } from './useMemo_03'

beforeEach(() => {
  vi.useFakeTimers()
})
afterEach(() => {
  vi.restoreAllMocks()
})

test('UseMemo_03 and children should have the same render count', () => {
  render(<UseMemoNo3 />)

  const addToQueueBtn = screen.getByRole('button', { name: 'Add To Queue' })
  fireEvent.click(addToQueueBtn)
  fireEvent.click(addToQueueBtn)

  Array.from({ length: 20 }, () => {
    act(() => {
      vi.advanceTimersToNextTimer()
    })
  })

  within(screen.getByTestId('useMemo_#3-render-counter')).getByText('render count - 23')
  within(screen.getByTestId('useMemo_#3_queue-list-render-counter')).getByText('render count - 3')
})

test('UseMemo_03 should produce a list of queue numbers on Add To Queue button click', () => {
  render(<UseMemoNo3 />)

  const addToQueueBtn = screen.getByRole('button', { name: 'Add To Queue' })
  const items = [1, 2, 3, 4, 5]

  items.forEach(() => {
    fireEvent.click(addToQueueBtn)
  })

  items.forEach((q) => {
    screen.getByText(`Queue No#${q}-priority-low_useMemo_#3_queue-list`)
  })
})
