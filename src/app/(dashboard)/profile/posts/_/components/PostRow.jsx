import Table from '@/ui/Table'
import { toLocalDateShort } from '@/utils/dateFormatter'
import { toPersianDigits } from '@/utils/numberFormatter'
import truncateText from '@/utils/truncateText'
import { DeletePost, UpdatePost } from './Buttons'

// free, premium =>

const typeStyle = {
	free: {
		label: 'رایگان',
		className: 'badge--success',
	},
	premium: {
		label: 'پولی',
		className: 'badge--secondary',
	},
}

function PostRow({ index, post }) {
	const { title, category, author, createdAt, type } = post
	return (
		<Table.Row>
			<td className="py-3 px-2 text-center">
				{toPersianDigits(index + 1)}
			</td>
			<td className="py-3 px-2 font-medium">
				{truncateText(title, 30)}
			</td>
			<td className="py-3 px-2 font-medium">{category.title}</td>
			<td className="py-3 px-2 font-medium">{author.name}</td>
			<td className="py-3 px-2 font-medium">
				{toLocalDateShort(createdAt)}
			</td>
			<td className="py-3 px-2 font-medium">
				<span className={`badge ${typeStyle[type].className}`}>
					{typeStyle[type].label}
				</span>
			</td>
			<td className="py-3 px-2 font-medium">
				<div className="flex items-center gap-x-3">
					<UpdatePost id={post._id} />
					<DeletePost post={post} />
				</div>
			</td>
		</Table.Row>
	)
}
export default PostRow
