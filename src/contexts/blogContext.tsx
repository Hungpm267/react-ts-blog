import { createContext, type ReactNode, useContext } from "react";
import { useBlogLogic } from "@/hooks/useBlogLogic";

type TodoContextType = ReturnType<typeof useBlogLogic>;

const BlogContext = createContext<TodoContextType | undefined>(undefined);

// --- BẮT ĐẦU THÊM TỪ ĐÂY ---

// 1. TẠO COMPONENT "BỘ PHÁT"
export function BlogProvider({ children }: { children: ReactNode }) {
  // 2. GỌI HOOK LOGIC CỦA CHÚNG TA Ở ĐÂY
  const blogLogic = useBlogLogic();

  // 3. "BỎ" 5 MÓN ĐỒ VÀO "VALUE" CỦA "HỘP"
  return (
    <BlogContext.Provider value={blogLogic}> {children} </BlogContext.Provider>
  );
}
// 4. TẠO MỘT HOOK ĐỂ "KẾT NỐI" (BẮT SÓNG)
// Đây là cách component con sẽ lấy đồ từ "hộp"
export function useBlogs() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    // Nếu ai đó dùng hook này bên ngoài "Bộ phát", chúng ta báo lỗi
    throw new Error("useTodos phải được dùng bên trong một TodoProvider");
  }
  return context;
}
