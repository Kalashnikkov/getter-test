import Link from 'next/link'

export default function Home() {
  return (
    <div class="bg-gray-200 h-screen flex items-center justify-center">
      <div class="px-5 flex flex-col">
        <h2 class="text-gray-900">
          <div class="text-4xl block font-extrabold">Johathan's Dashboard</div>
          <div class="text-xl block text-green-600 mt-1 italic">Using NextJS, TailwindCSS, ChartJS, and Ava</div>
        </h2>
        <div class="flex items-center">
          <div class="my-3">
            <Link href="/sales-dashboard">
              <button class="px-4 py-2 border border-transparent font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                View Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
