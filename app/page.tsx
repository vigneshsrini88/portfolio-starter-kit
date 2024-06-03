import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Vignesh Srinivasan
      </h1>
      <h2>About Me</h2>
      <p className="mb-4">
        {`Leadership and Project Management Expertise
Led and mentored a team of skilled Technical Writers, fostering growth and delivering high-quality documentation. Successfully managed projects and collaborated with cross-functional teams, demonstrating expertise in project management, people management, and Agile methodologies. With a keen attention to detail, I ensure accuracy, clarity, and adherence to industry standards in all deliverables.`}
      </p><p className="mb-4">
        {`Specialized Industry Knowledge and Technical Proficiency
Specialize in creating user-friendly and SEO-optimized documentation for Aerospace, Healthcare, HVAC, and Telecommunications industries. Proficient in tools and technologies relevant to Technical Writing, including CMS (Content Management Systems), style guides, and documentation workflows. My approach includes implementing content strategy and streamlining processes for efficient content reuse and knowledge management.`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
