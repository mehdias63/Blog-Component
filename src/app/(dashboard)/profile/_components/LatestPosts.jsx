import PostsTable from '../posts/_/components/PostsTable'

function LatestPosts() {
	const query = 'sort=latest&limit=3'
	return <PostsTable query={query} />
}
export default LatestPosts
