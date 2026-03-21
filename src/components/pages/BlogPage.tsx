import BlogList from "../BlogList"

export default function BlogPage() {
  return (
    <>
      <div className="mx-auto px-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Posts</h1>
      </div>
      <div>
        <BlogList />
      </div>
    </>
  )
}