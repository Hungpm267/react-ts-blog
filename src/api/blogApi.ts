// src/api/mockBlogApi.ts

import type { Blog } from "@/types/blog.ts"; // (Nhớ chỉnh lại đường dẫn)

export const fetchAllBlogs = async (): Promise<Blog[]> => {
  const response = await fetch("http://localhost:3000/blogs");
  return response.json();
}; 

