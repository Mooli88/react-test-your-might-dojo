import type { NextPage } from 'next'
import PlayList from '../app/dojo/Reconciliation/Playlist/Playlist'
import styles from '../styles/Home.module.css'
import songs from '../app/dojo/Reconciliation/Playlist/songs.json'

const PlaylistPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <PlayList songs={songs} />
      </main>
    </div>
  )
}

export default PlaylistPage
