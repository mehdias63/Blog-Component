import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useDarkMode } from '../context/DarkModeContext'

function DarkModeToggle() {
	const { isDarkMode, toggleDarkMode } = useDarkMode()

	return (
		<button onClick={toggleDarkMode}>
			{isDarkMode ? (
				<div className="flex gap-x-2 text-white border p-1 bg-slate-700 border-slate-400 rounded-md shadow-lg shadow-gray-500">
					<HiOutlineSun className="w-5 h-5 text-white" />
					<span>حالت روشن</span>
				</div>
			) : (
				<div className="flex gap-x-2 border p-1 bg-secondary-100 border-slate-400 rounded-md shadow-lg shadow-gray-600">
					<HiOutlineMoon className="w-5 h-5 text-primary-900" />
					<span>حالت تاریک</span>
				</div>
			)}
		</button>
	)
}
export default DarkModeToggle
