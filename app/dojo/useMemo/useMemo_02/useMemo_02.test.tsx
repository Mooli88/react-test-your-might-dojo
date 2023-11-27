import { fireEvent, render, screen, within } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import * as React from 'react'
import { UseMemoNo2 } from './useMemo_02'

test('UseMemo_02 should NOT use useMemo hook', () => {
  const useMemoSpy = vi.spyOn(React, 'useMemo')

  render(<UseMemoNo2 />)

  const addToQueueBtn = screen.getByRole('button', { name: 'Add To Queue' })

  fireEvent.click(addToQueueBtn)
  fireEvent.click(addToQueueBtn)

  expect(useMemoSpy).not.toHaveBeenCalled()
})

test('UseMemo_02 and children should have the same render count', () => {
  render(<UseMemoNo2 />)

  const addToQueueBtn = screen.getByRole('button', { name: 'Add To Queue' })
  fireEvent.click(addToQueueBtn)
  fireEvent.click(addToQueueBtn)

  within(screen.getByTestId('useMemo_#2-render-counter')).getByText('render count - 3')
  within(screen.getByTestId('useMemo_#2_queue-list-render-counter')).getByText('render count - 3')
})

test('Change queue item priority from "low" to "high"', async () => {
  render(<UseMemoNo2 />)

  const addToQueueBtn = screen.getByRole('button', { name: 'Add To Queue' })
  const changeQueueItemPriorityBtn = screen.getByRole('button', {
    name: 'Change Queue item priority',
  })

  const items = [1, 2, 3]

  items.forEach(() => {
    fireEvent.click(addToQueueBtn)
  })
  fireEvent.click(changeQueueItemPriorityBtn)

  screen.getByText('Queue No#1-priority-high_useMemo_#2_queue-list')
})

test('UseMemo_02 should produce a list of queue numbers on Add To Queue button click', () => {
  render(<UseMemoNo2 />)

  const addToQueueBtn = screen.getByRole('button', { name: 'Add To Queue' })
  const items = [1, 2, 3, 4, 5]

  items.forEach(() => {
    fireEvent.click(addToQueueBtn)
  })

  items.forEach((q) => {
    screen.getByText(`Queue No#${q}-priority-low_useMemo_#2_queue-list`)
  })
})
