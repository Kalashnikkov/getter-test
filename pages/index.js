import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/sales-dashboard">
        <a>Click here to go to the dashboard.</a>
      </Link>
    </div>
  )
}
