import React from 'react';
import Link from 'next/link'
import useSWR from 'swr'
import LineGraph from './Line'
import Card from './Card';
import moment from 'moment'

// Needed for SWR - React hooks for data fetching - simple library used
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
        const labels = Object.keys(orders.orders[0])
        const rawData = Object.values(orders.orders[0])
        
        // Create tuple array to combine both data into an array format instead of an object - could possibly be done by passing the whole object into the Card component, time limiting
        const combinedData = []
        for (var i = 0; i < labels.length; i++) {
            combinedData.push([labels[i], rawData[i]])
        }
        
        return(
            <div class="flex flex-row justify-between">
                {combinedData.map(x => {
                    return(
                        <Card
                            label={x[0]}
                            data={x[1]}
                        />
                    )
                })}
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
                <LineGraph
                    revenue={revenue.revenueThisWeek}
                />
        )
    }
}

// Using momentJS to get current time and date
function getCurrentDate() {
    var formattedTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    return formattedTime
}

export default function Dashboard() {
    return (
        <div class="bg-gray-100 flex lg:h-screen h-full min-h-screen flex-col md:flex-row">
            {/* Sidebar Container */}
            <div class="bg-green-600">
                <div class="flex flex-row md:flex-col">
                    <Link href="/">
                        <button class="bg-green-600 hover:bg-green-700 px-4 py-2 mx-4 my-2 border border-transparent font-medium rounded-md text-white">
                            Back
                        </button>
                    </Link>
                    <button class="bg-green-700 hover:bg-green-800 px-4 py-2 mx-4 my-2 border border-transparent font-medium rounded-md text-white">
                        Graphs
                    </button>
                </div>
            </div>

            {/* Graphs container */}
            <div class="flex flex-col bg-gray-100 w-full p-8 justify-center">
                <div class="items-center flex flex-col italic text-lg text-gray-500">
                    Data as of: {getCurrentDate()}
                </div>
                <div class="flex justify-around flex-col items-center">
                    {/* Graph Cards */}
                    {/* Can throw these into a single component and reuse instead of repeating code */}
                    <div class="bg-white w-6/12 p-6 m-1 rounded-xl drop-shadow-xl">
                        <h1 class="text-3xl">
                            Orders
                        </h1>
                        <p class="text-gray-500">
                            # of orders per state
                        </p>
                        <OrdersContent/>
                    </div>
                    <div class="bg-white w-6/12 p-6 m-1 rounded-xl drop-shadow-xl">
                        <h1 class="text-3xl">
                            Revenue
                        </h1>
                        <p class="text-gray-500">
                            $ per day
                        </p>
                        <RevenueContent/>
                    </div>
                </div>
            </div>
        </div>
    )
}