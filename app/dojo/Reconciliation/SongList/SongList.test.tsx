import { fireEvent, render, screen, within } from '@testing-library/react'
import { expect, test } from 'vitest'
import SongList from './SongList'
import songsData from './songs.json'

test('renders song list', async () => {
  render(<SongList songs={songsData} />)

  const songList = screen.getByRole('list')
  songsData.forEach((song) => {
    within(songList).getByText(`#0${song.id} - ${song.title}`)
  })
})

// TODO: Fix code to make this test pass
test('shuffle song list and track changes correctly', async () => {
  render(<SongList songs={songsData} />)

  const songList = screen.getByRole('list')
  let songNumOne = within(songList).getByText('#01 - The Less I Know The Better')

  let songNumOneRating = within(songNumOne).getByRole<HTMLInputElement>('spinbutton', {
    name: 'Rating:',
  })

  expect(songNumOneRating.value).toBe('10')

  const shuffleButton = screen.getByText('Shuffle Songs')

  fireEvent.click(shuffleButton)

  songNumOne = within(songList).getByText('#01 - The Less I Know The Better')
  songNumOneRating = within(songNumOne).getByRole<HTMLInputElement>('spinbutton', {
    name: 'Rating:',
  })

  expect(songNumOneRating.value).toBe('10')
})
