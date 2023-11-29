import { fireEvent, render, screen, within } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import * as React from 'react'
import { UseMemoNo2 } from './useMemo02'

test('UseMemo02 should NOT use useMemo hook', () => {
  const useMemoSpy = vi.spyOn(React, 'useMemo')

  render(<UseMemoNo2 />)

  expect(useMemoSpy).not.toHaveBeenCalled()
})

test('UseMemo02 and children should have the same render count', () => {
  render(<UseMemoNo2 />)

  const addToQueueBtn = screen.getByRole('button', { name: 'Add To Queue' })
  fireEvent.click(addToQueueBtn)
  fireEvent.click(addToQueueBtn)

  within(screen.getByTestId('useMemo_#2-render-counter')).getByText('render count - 3')
  within(screen.getByTestId('useMemo_#2_queue-list-render-counter')).getByText('render count - 3')
})

test('UseMemo02 should produce a list of queue numbers on Add To Queue button click', () => {
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
