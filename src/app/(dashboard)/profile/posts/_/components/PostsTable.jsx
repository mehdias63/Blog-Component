import { getPosts } from '@/services/postServices'
import Empty from '@/ui/Empty'
import Table from '@/ui/Table'
import PostRow from './PostRow'

async function PostsTable({ query = '' }) {
	const { posts } = await getPosts(query)

	if (!posts.length) return <Empty resourceName="پستی" />

	return (
		<div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
			<Table>
				<Table.Header className="bg-slate-50 text-slate-600 text-sm font-semibold uppercase">
					<th className="py-4 px-2 text-center">#</th>
					<th className="py-4 px-2 text-right">عنوان</th>
					<th className="py-4 px-2 text-right">دسته‌بندی</th>
					<th className="py-4 px-2 text-right">نویسنده</th>
					<th className="py-4 px-2 text-right">تاریخ ایجاد</th>
					<th className="py-4 px-2 text-right">حالت </th>
					<th className="py-4 px-2 text-right">عملیات</th>
				</Table.Header>
				<Table.Body>
					{posts.map((post, index) => (
						<PostRow key={post._id} post={post} index={index} />
					))}
				</Table.Body>
			</Table>
		</div>
	)
}
export default PostsTable
