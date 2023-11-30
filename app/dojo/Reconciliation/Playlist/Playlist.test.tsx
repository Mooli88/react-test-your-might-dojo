import { fireEvent, render, screen, within } from '@testing-library/react'
import { expect, test } from 'vitest'
import Playlist from './Playlist'
import songsData from './songs.json'

test('renders playlist', async () => {
  render(<Playlist songs={songsData} />)

  const playlist = screen.getByRole('list')
  songsData.forEach((song) => {
    within(playlist).getByText(`#0${song.id} - ${song.title}`)
  })
})

// TODO: Fix code to make this test pass
test('shuffle playlist and track changes correctly', async () => {
  render(<Playlist songs={songsData} />)

  const playlist = screen.getByRole('list')
  let songNumOne = within(playlist).getByText('#01 - The Less I Know The Better')

  within(songNumOne).getByLabelText('Rating:')
  within(songNumOne).getByDisplayValue('10') // Rating should be 10

  const shuffleButton = screen.getByText('Shuffle Songs')

  fireEvent.click(shuffleButton)

  songNumOne = within(playlist).getByText('#01 - The Less I Know The Better')

  // Song position in the list changed but rating should still be 10
  within(songNumOne).getByDisplayValue('10')
})
