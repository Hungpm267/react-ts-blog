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
    handleDeleteBlog,
  };
}