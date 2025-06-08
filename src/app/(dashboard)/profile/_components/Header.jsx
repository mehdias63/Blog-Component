'use client'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import ButtonIcon from '@/ui/ButtonIcon'
import Avatar from '@/ui/Avatar'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Drawer from '@/ui/Drawer'
import SideBar from './SideBar'
import DarkModeToggle from '@/ui/DarkModeToggle'

function Header() {
	const [isOpenDrawer, setIsOpenDrawer] = useState(false)
	const { user, isLoading } = useAuth()

	return (
		<header
			className={`bg-secondary-0 ${
				isLoading ? 'bg-opacity-30 blur-md' : ''
			}`}
		>
			<div className="flex items-center justify-between py-5 px-4 lg:px-8">
				<ButtonIcon
					className="block lg:hidden border-none"
					variant="outline"
					onClick={() => setIsOpenDrawer(!isOpenDrawer)}
				>
					{isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
				</ButtonIcon>
				<div className="flex items-center justify-center gap-x-12">
					<span className="text-sm lg:text-lg font-bold text-secondary-700">
						سلام {user?.name}
					</span>

					<Link href="/profile">
						<Avatar src={user?.avatarUrl} />
					</Link>
				</div>
				<DarkModeToggle />
				<Drawer
					open={isOpenDrawer}
					onClose={() => setIsOpenDrawer(false)}
				>
					<SideBar onClose={() => setIsOpenDrawer(false)} />
				</Drawer>
			</div>
		</header>
	)
}
export default Header
