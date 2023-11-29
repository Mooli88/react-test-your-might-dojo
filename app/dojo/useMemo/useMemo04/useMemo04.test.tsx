import { fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'
import { expect, test, vi } from 'vitest'
import { UseMemoNo4 } from './useMemo04'

test('UseMemo04 should use useMemo hook', () => {
  const useMemoSpy = vi.spyOn(React, 'useMemo')

  render(<UseMemoNo4 />)

  expect(useMemoSpy).toHaveBeenCalled()
})

test('Change queue item priority from "low" to "high"', async () => {
  render(<UseMemoNo4 />)

  const addToQueueBtn = screen.getByRole('button', { name: 'Add To Queue' })
  const changeQueueItemPriorityBtn = screen.getByRole('button', {
    name: 'Change Queue item priority',
  })

  const items = [1, 2, 3]

  items.forEach(() => {
    fireEvent.click(addToQueueBtn)
  })
  fireEvent.click(changeQueueItemPriorityBtn)

  screen.getByText('Queue No#1-priority-high_useMemo_#4_queue-list')
})

test('UseMemo04 should produce a list of queue numbers on Add To Queue button click', () => {
  render(<UseMemoNo4 />)

  const addToQueueBtn = screen.getByRole('button', { name: 'Add To Queue' })
  const items = [1, 2, 3, 4, 5]

  items.forEach(() => {
    fireEvent.click(addToQueueBtn)
  })

  items.forEach((q) => {
    screen.getByText(`Queue No#${q}-priority-low_useMemo_#4_queue-list`)
  })
})
