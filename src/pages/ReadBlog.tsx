import { useParams } from "react-router-dom";
import { useBlogs } from "@/contexts/BlogContext";

export function ReadBlog() {
  const { blogId } = useParams();
  const { blogs } = useBlogs();
  const blog = blogs.find((baidang) => baidang.id === Number(blogId));
  if (!blog) {
    return <h1>Could not find any blog</h1>;
  }
  return (
    <div className="flex flex-col m-8 p-5 border rounded-2xl">
      <div className="text-4xl font-extrabold mb-6">{blog.title}</div>
      <p>{blog.content}</p>
    </div>
  );
}
