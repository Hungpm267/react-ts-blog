import { useParams } from "react-router-dom";
import { useBlogs } from "@/contexts/blogContext";

export function ReadBlog() {
  const { blogId } = useParams();
  const { blogs } = useBlogs();
  const blog = blogs.find((baidang) => baidang.id === Number(blogId));
  if(!blog){
    return(
        <h1>Could not find any blog</h1>
    )
  }
  return (
    <div className="flex flex-col m-8 p-5 bg-gray-100 rounded-2xl">
      <div className="text-4xl font-extrabold text-gray-900 mb-6">{blog.title}</div>
      <p>{blog.content}</p>
    
    </div>
  );
}
