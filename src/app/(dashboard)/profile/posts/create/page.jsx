import Breadcrumbs from '@/ui/BreadCrumbs'
// import CreatePostForm from './_/CreatePostForm'

export default function Page() {
	return (
		<div>
			<Breadcrumbs
				breadcrumbs={[
					{
						label: 'پست ها',
						href: '/profile/posts',
					},
					{
						label: 'ایجاد پست',
						href: '/profile/posts/creae',
						active: true,
					},
				]}
			/>
			create Form
			{/* <CreatePostForm /> */}
		</div>
	)
}
