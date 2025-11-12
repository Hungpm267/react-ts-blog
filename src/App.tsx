import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { AllBlog } from "./pages/AllBlogs";
import { ReadBlog } from "./pages/ReadBlog";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./components/mode-toggle";
import { BlogProvider } from "./contexts/BlogContext";
import { Toaster } from "@/components/ui/sonner";
// 1. Import hook useAuth và component LoginForm
import { useAuth } from "./contexts/AuthContext";
import { LoginForm } from "./pages/LoginForm";

function App() {
  // 2. Lấy user và hàm logout từ context
  const { user, logout, isLoading } = useAuth();

  // 3. Render có điều kiện (Conditional Rendering)
  if (!user) {
    // Nếu chưa đăng nhập, chỉ hiển thị form login
    return (
      <div className="flex flex-col items-center p-8">
        <Toaster position="top-center" />
        <LoginForm />
      </div>
    );
  }

  return (
    <BlogProvider>
      <div>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Toaster position="top-center" />

          {/* --- PHẦN XÁC THỰC --- */}
          <div className="w-full max-w-4xl p-4 bg-gray-100 rounded-md mb-8">
            <h1 className="text-xl">
              Chào mừng, <strong>{user.username}</strong>!
            </h1>
            <button
              disabled={isLoading}
              onClick={logout} // Gọi hàm logout từ context
              className="disabled:bg-gray-400 mt-2 bg-red-500 text-white p-2 rounded hover:bg-red-700"
            >
              {isLoading ? "Đang đăng xuất..." : "Đăng xuất"}
            </button>
          </div>
          {/* --------------------- */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/">Blog</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/read-blog">Read Blog</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <ModeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Routes>
            <Route path="/" element={<AllBlog />} />
            <Route path="/blog/:blogId" element={<ReadBlog />} />
          </Routes>
        </ThemeProvider>
      </div>
    </BlogProvider>
  );
}

export default App;
