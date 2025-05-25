import Link from 'next/link'

async function CategoryList() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`,
	)
	const {
		data: { categories },
	} = await res.json()
	return (
		<ul className="space-y-4 flex md:flex-col gap-x-4 items-center justify-center md:items-start text-sm md:text-base font-bold">
			<Link href="/blogs" className="mt-4">
				همه
			</Link>
			{categories.map(category => {
				return (
					<li key={category._id}>
						<Link href={`/blogs/category/${category.slug}`}>
							{category.title}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default CategoryList
