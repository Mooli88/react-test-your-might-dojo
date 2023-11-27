import { render } from '@testing-library/react'
import * as React from 'react'
import { expect, test, vi } from 'vitest'
import { UseCallbackNo1 } from './UseCallbackNo1'

test('UseCallbackNo1 should NOT use useCallback hook', () => {
  const useMemoSpy = vi.spyOn(React, 'useCallback')

  render(<UseCallbackNo1 />)

  expect(useMemoSpy).not.toHaveBeenCalled()
})
