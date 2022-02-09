import styles from '../styles/Home.module.css'
import Link from 'next/link'
import useSWR from 'swr'
import BarGraph from './Bar'
import LineGraph from './Line'

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
    if (isLoading) {
        return (
            <div>Loading</div>
        )
    } else {
        return (
            <div>
                <BarGraph
                    orders={orders.orders}
                />
            </div>
        )
    }
}

function RevenueContent () {
    const { revenue, isLoading, isError } = getRevenue()
    if (isLoading) {
        return (
            <div>Loading</div>
        )
    } else {
        return (
            <div>
                <LineGraph
                    revenue={revenue.revenueThisWeek}
                />
            </div>
        )
    }
}

export default function Dashboard() {
    return (
        <div class="bg-gray-200 h-screen flex items-center justify-center">
            <div>
                <Link href="/">
                    <a>Go back a page</a>
                </Link>
            </div>
            <div>
                <OrdersContent/>
            </div>
            <div>
                <RevenueContent/>
            </div>
        </div>
    )
}