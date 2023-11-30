import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3>Reconciliation</h3>
        <ul>
          <li>
            <i>
              <Link href='/swap-order'>To Swap Order</Link>
            </i>
          </li>
          <li>
            <i>
              <Link href='/contact-manager'>To Contact Manager</Link>
            </i>
          </li>
          <li>
            <i>
              <Link href='/playlist'>To Playlist</Link>
            </i>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Home
