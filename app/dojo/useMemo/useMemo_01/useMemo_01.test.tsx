import { fireEvent, render, screen, within } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import { UseMemoNo1 } from './useMemo_01'
import * as React from 'react'

test('useMemo_01 should NOT use useMemo hook', () => {
  const useMemoSpy = vi.spyOn(React, 'useMemo')

  render(<UseMemoNo1 />)

  expect(useMemoSpy).not.toHaveBeenCalled()
})
