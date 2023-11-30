import type { NextPage } from 'next'
import PlayList from '../app/dojo/Reconciliation/Playlist/Playlist'
import styles from '../styles/Home.module.css'
import songs from '../app/dojo/Reconciliation/Playlist/songs.json'
import SwapOrder from '../app/dojo/Reconciliation/SwapOrder/SwapOrder'

const SwapOrderPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SwapOrder />
      </main>
    </div>
  )
}

export default SwapOrderPage
