import { act, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import { Counter, UseMemoNo3 } from './useMemo03'
import React from 'react'

beforeEach(() => {
  vi.useFakeTimers()
})
afterEach(() => {
  vi.restoreAllMocks()
})

test('UseMemo03 should render on every state change', () => {
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

test('UseMemo03 QueueList should render on every state change of qList', () => {
  render(<UseMemoNo3 />)

  const addToQueueBtn = screen.getByRole('button', { name: 'Add To Queue' })
  fireEvent.click(addToQueueBtn)
  fireEvent.click(addToQueueBtn)

  Array.from({ length: 20 }, () => {
    act(() => {
      vi.advanceTimersToNextTimer()
    })
  })

  within(screen.getByTestId('useMemo_#3_queue-list-render-counter')).getByText('render count - 3')
})

test('UseMemo03 should produce a list of queue numbers on Add To Queue button click', () => {
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

test('UseMemo03 Counter should NOT use useMemo hook', () => {
  const useMemoSpy = vi.spyOn(React, 'useMemo')

  render(<Counter value={1} />)

  expect(useMemoSpy).not.toHaveBeenCalled()
})

test('UseMemo03 Counter should NOT use memo', () => {
  render(<UseMemoNo3 />)

  const addToQueueBtn = screen.getByRole('button', { name: 'Add To Queue' })
  fireEvent.click(addToQueueBtn)
  fireEvent.click(addToQueueBtn)

  Array.from({ length: 20 }, () => {
    act(() => {
      vi.advanceTimersToNextTimer()
    })
  })

  within(screen.getByTestId('useMemo_#3_counter-render-counter')).getByText('render count - 23')
})
