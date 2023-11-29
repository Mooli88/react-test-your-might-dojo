import { render } from '@testing-library/react'
import * as React from 'react'
import { expect, test, vi } from 'vitest'
import { UseMemoNo1 } from './useMemo01'

test('useMemo01 should NOT use useMemo hook', () => {
  const useMemoSpy = vi.spyOn(React, 'useMemo')

  render(<UseMemoNo1 />)

  expect(useMemoSpy).not.toHaveBeenCalled()
})
