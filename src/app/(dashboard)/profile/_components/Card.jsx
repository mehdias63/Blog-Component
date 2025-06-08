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
		<div className="flex items-center gap-4 rounded-xl shadow-md p-5 hover:shadow-lg transition-all border bg-secondary-50">
			<div className="flex items-center justify-center w-12 h-12 rounded-full text-secondary-600">
				{Icon && <Icon className="w-6 h-6" />}
			</div>

			<div className="flex flex-col text-secondary-500">
				<span className="text-sm font-medium ">{title}</span>
				<span className="text-xl font-bold">{value}</span>
			</div>
		</div>
	)
}
