// src/api/mockBlogApi.ts

import type { Blog, NewBlogPayLoad } from "@/types/blog.ts"; // (Nhớ chỉnh lại đường dẫn)

// 1. Dữ liệu giả lập (Mock Database)
const MOCK_POSTS: Blog[] = [
  {
    id: 1,
    title: "Học TanStack Query thật dễ!",
    content: "Nội dung bài viết đầu tiên...",
    description: "TanStack query học mệt vllll",
    created_time: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Cách giả lập API khi học Frontend",
    description: "bằng tạo mockBlogApi",
    content: "Nội dung bài viết thứ hai...",
    created_time: new Date().toISOString(),
  },
];

// 2. Hàm giả lập độ trễ mạng (Network Delay)
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// --- ĐỊNH NGHĨA CÁC HÀM "API" CỦA BẠN ---

/**
 * API giả: Lấy tất cả bài viết
 */
export const fetchAllBlogs = async (): Promise<Blog[]> => {
  console.log("API (Mock): Đang lấy tất cả bài viết...");
  await delay(1000); // Giả lập 1 giây chờ

  // Sắp xếp để bài mới nhất lên đầu
  const sortedPosts = [...MOCK_POSTS].sort(
    (a, b) =>
      new Date(b.created_time).getTime() - new Date(a.created_time).getTime()
  );

  return sortedPosts;
};

/**
 * API giả: Tạo một bài viết mới
 */
export const createBlog = async (newPost: NewBlogPayLoad): Promise<Blog> => {
  console.log("API (Mock): Đang tạo bài viết mới...");
  await delay(500); // Giả lập 0.5 giây chờ

  // Tạo một bài viết hoàn chỉnh
  const postToAdd: Blog = {
    id: Math.random() * 10000, // ID ngẫu nhiên
    ...newPost,
    created_time: new Date().toISOString(),
  };

  // Thêm vào "database" giả
  MOCK_POSTS.push(postToAdd);

  return postToAdd;
};
