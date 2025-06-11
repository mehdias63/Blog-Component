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
				<Table.Header>
					<th className="text-center">#</th>
					<th>عنوان</th>
					<th className="px-2">دسته‌بندی</th>
					<th>نویسنده</th>
					<th className="px-2">تاریخ ایجاد</th>
					<th>مبلغ</th>
					<th>عملیات</th>
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
