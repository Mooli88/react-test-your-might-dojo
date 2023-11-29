import { useState } from 'react'

type Song = {
  id: string
  title: string
  artist: string
  album: string
  rating: string
}

type Props = {
  songs: Song[]
}

const SongList = ({ songs }: Props) => {
  const [shuffledSongs, setShuffledSongs] = useState<Song[]>(songs)

  const shuffleSongs = (): void => {
    const shuffled = [...shuffledSongs].sort(() => Math.random() - 0.5)

    if (shuffled[0].id === shuffledSongs[0].id) {
      return shuffleSongs()
    }

    setShuffledSongs(shuffled)
  }

  return (
    <div>
      <h1>My Music Playlist</h1>
      <button onClick={shuffleSongs}>Shuffle Songs</button>
      <ul>
        {shuffledSongs.map((song, index) => (
          <li key={index}>
            #0{song.id} - {song.title}
            <label>
              Rating: <input type='number' min='1' max='10' defaultValue={song.rating} />
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SongList
