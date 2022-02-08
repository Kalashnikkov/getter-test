import styles from '../styles/Home.module.css'
import Link from 'next/link'
import useSWR from'swr'

function getData() {
    const { data, error } = useSWR('/api/getRevenue', fetch)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>{data}</div>
}

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <h1 className="title">
            <Link href="/">
                <a>Go back a page</a>
            </Link>
            <button>Click me to call getData</button>
            </h1>
        </div>
    )
}