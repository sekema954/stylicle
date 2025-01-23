// blog pages with unique id
import { useParams } from "react-router-dom"
import { blogs } from "../components/Blog";
import { FONTS } from "../constants/styles";
function BlogPage() {
    const { id } = useParams<{ id: string }>(); 
    const blog = blogs.find((blog)=>blog.id===parseInt(id!))

    if(!blog) {
        return <h1>Blog Not Found</h1>;
    }
  return (
    <section className="py-16">
        <div className="flex flex-col items-center justify-center px-36 gap-10">
           <h1
           style={{fontFamily: FONTS.titleFont}}
           className="text-4xl font-bold">{blog.title}
           </h1>
           <p style={{fontFamily: FONTS.subTitleFont}}>{blog.content}</p>
           <div className="w-full h-[500px]">
                <img className="w-full h-full object-cover" src={blog.thumbnail} alt={blog.title} aria-label={blog.title} />
           </div>
           <p>{blog.date}</p>
        </div>
    </section>
  )
}

export default BlogPage