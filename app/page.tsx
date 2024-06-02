import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Vignesh Srinivasan
      </h1>
      <p className="mb-4">
        {`I am practising Vercel New App. My answers are in the Blogs`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
