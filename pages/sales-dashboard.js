import styles from '../styles/Home.module.css'
import Link from 'next/link'
import useSWR from 'swr'
import BarGraph from './Bar'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function getOrders() {
    const { data, error } = useSWR('/api/getOrders', fetcher)

    return {
        orders: data,
        isLoading: !error && !data,
        isError: error
    }
}

function getRevenue() {
    const { data, error } = useSWR('/api/getRevenue', fetcher)

    return {
        revenue: data,
        isLoading: !error && !data,
        isError: error
    }
}

function OrdersContent () {
    const { orders, isLoading, isError } = getOrders()
    if (isLoading) return <div>wtf</div>
    return <h1>hello {orders.orders[0].qld} 555</h1>
    
}

function RevenueContent () {
    const { revenue, isLoading, isError } = getRevenue()
    if (isLoading) {
        return (
            <div>wtf</div>
        )
    } else {
        return (
            <div>
                <BarGraph
                    revenue={revenue}
                />
            </div>
        )
    }
}

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <h1 className="title">
            <Link href="/">
                <a>Go back a page</a>
            </Link>
            <OrdersContent/>
            <RevenueContent/>
            </h1>
        </div>
    )
}