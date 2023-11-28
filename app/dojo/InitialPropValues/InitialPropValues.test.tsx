import { render } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import { App } from './InitialPropValues'
import React from 'react'

test('track initial prop values without the use of useMemo or useCallback hook', () => {
  const useMemoSpy = vi.spyOn(React, 'useMemo')
  const useCallbackSpy = vi.spyOn(React, 'useCallback')

  render(<App impressionTracker={vi.fn()} propA='propA' propB='propB' propC='propC' />)

  expect(useMemoSpy).not.toHaveBeenCalled()
  expect(useCallbackSpy).not.toHaveBeenCalled()
})

test('impressionTracker only get called on mount', () => {
  const impressionTrackerSpy = vi.fn()
  render(<App impressionTracker={impressionTrackerSpy} propA='propA' propB='propB' propC='propC' />)

  expect(impressionTrackerSpy).toHaveBeenCalledTimes(1)
})
