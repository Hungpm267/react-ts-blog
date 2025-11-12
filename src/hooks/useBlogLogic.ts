import { useState } from "react";
import type { Blog } from "@/types/blog";
import { useForm, type FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    content: yup.string().required(),
  })
  .required();

export function useBlogLogic() {
  const [blogs, setBlog] = useState<Blog[]>([]);
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const {register, handleSubmit, control, formState:{errors}, reset} = useForm({resolver: yupResolver(schema)});
  function handleAddBlog(data: FieldValues): void {
    // e.preventDefault();
    const newblogs = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      content: data.content,
      created_time: data.created_time,
    };
    setBlog([...blogs, newblogs]);
    reset();
    // setContent("");
    // setTitle("");
  }
function handleEditBlog(data: FieldValues): void {
  // e.preventDefault();

  // Tạo đối tượng blog đã chỉnh sửa từ dữ liệu form
  // (Chúng ta giả định data.id và data.created_time được truyền vào
  // thông qua việc gọi `reset(blog)` trước khi mở Dialog)
  const newblogs = {
    id: data.id, // Giữ id cũ
    title: data.title,
    description: data.description,
    content: data.content,
    created_time: data.created_time, // Giữ thời gian tạo gốc
  };

  // **** PHẦN SỬA LỖI LOGIC ****
  // Dùng .map() để tạo một mảng mới
  // Nếu blog.id khớp với id của blog đang sửa, trả về blog đã sửa
  // Nếu không, trả về blog cũ
  setBlog((prevBlogs) =>
    prevBlogs.map((blog) => (blog.id === newblogs.id ? newblogs : blog))
  );

  reset(newblogs); // Xóa các trường trong form
}
  function handleDeleteBlog(id: number) {
    const newListBlog = blogs.filter((baiblog) => baiblog.id != id);
    setBlog(newListBlog);
  }
  return {
    blogs,
    setBlog,
    register,
    handleSubmit,
    control,
    errors,
    handleAddBlog,
    handleEditBlog,
    handleDeleteBlog,
    reset,
  };
}