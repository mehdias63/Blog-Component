import Header from './_components/Header'
import SideBar from './_components/SideBar'

export const metadata = {
	title: 'پروفایل',
	description: 'پروفایل',
}

export default function RootLayout({ children }) {
	return (
		<div className="bg-secondary-0">
			<div className="grid grid-cols-12 grid-rows-[auto_1fr] h-screen">
				<aside className="hidden lg:block col-span-3 xl:col-span-2 row-span-2">
					<SideBar />
				</aside>
				<div className="grid-cols-12 lg:col-span-9 xl:col-span-10 row-span-1">
					<Header />
				</div>
				<main className="grid-cols-12 lg:col-span-9 xl:col-span-10 bg-secondary-100 rounded-tr-3xl p-4 md:p-6 overflow-y-auto">
					<div className="xl:max-w-screen-xl ">{children}</div>
				</main>
			</div>
		</div>
	)
}
