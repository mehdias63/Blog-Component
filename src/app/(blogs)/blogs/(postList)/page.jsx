import PostList from '../_components/PostList'
import { cookies } from 'next/headers'
import setCookieOnReq from '@/utils/setCookieOnReq'
import queryString from 'query-string'
import { getPosts } from '@/services/postServices'

async function BlogPage({ searchParams }) {
	const queries = queryString.stringify(await searchParams)
	const cookieStore = cookies()
	const options = setCookieOnReq(cookieStore)
	const posts = await getPosts(queries, options)
	const { search } = await searchParams
	return (
		<div>
			{search ? (
				<p className="mb-4 text-secondary-700">
					{posts.length === 0
						? ' هیچ پستی با این مشخصات پیدا نشد '
						: `نشان دادن ${posts.length} نتیجه برای`}
					<span className="font-bold">&quot;{search}&quot;</span>
				</p>
			) : null}
			<PostList posts={posts} />
		</div>
	)
}

export default BlogPage
