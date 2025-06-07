import {
	UserGroupIcon,
	ChatBubbleBottomCenterTextIcon,
	DocumentIcon,
} from '@heroicons/react/24/outline'

const iconMap = {
	comments: ChatBubbleBottomCenterTextIcon,
	users: UserGroupIcon,
	posts: DocumentIcon,
}

export default function Card({ title, value, type }) {
	const Icon = iconMap[type]

	return (
		<div className="flex items-center gap-4 rounded-xl bg-white shadow-md p-5 hover:shadow-lg transition-all border border-slate-100">
			<div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600">
				{Icon && <Icon className="w-6 h-6" />}
			</div>

			<div className="flex flex-col">
				<span className="text-sm text-slate-500">{title}</span>
				<span className="text-xl font-bold text-slate-700">
					{value}
				</span>
			</div>
		</div>
	)
}
