import Image from 'next/image'
import CoverImage from './CoverImage'
import Link from 'next/link'
import Author from './Author'
import { ClockIcon } from '@heroicons/react/24/outline'
import PostInteraction from './PostInteraction'

async function PostList({ posts }) {
	return posts.length > 0 ? (
		<div className="grid grid-cols-12 gap-4">
			{posts.map(post => (
				<div
					className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 border border-secondary-300 p-2 rounded-lg"
					key={post.title}
				>
					<CoverImage {...post} />
					<div>
						<Link href={`/blogs/${post.slug}`}>
							<h2 className="mb-4 font-bold text-secondary-700 hover:text-primary-900 transition-all ease-out">
								{post.title}
							</h2>
						</Link>
						<div className="flex items-center justify-between mb-4">
							<Author {...post.author} />
							<div className="flex items-center text-[10px] text-secondary-500">
								<ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
								<span className="ml-1"> خواندن:</span>
								<span className="ml-1 leading-3">
									{post.readingTime}
								</span>
								<span>دقیقه</span>
							</div>
						</div>
						<PostInteraction post={post} />
					</div>
				</div>
			))}
		</div>
	) : null
}

export default PostList
