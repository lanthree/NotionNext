export default function ArticleInfo({ post }) {
  if (!post) {
    return null
  }
  return <div className="pt-3 pb-4 text-gray-400 text-sm border-b">
        <i className="fa-regular fa-clock mr-1" />
        Last update:  { post.date?.start_date}
    </div>
}
