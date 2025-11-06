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
import { BlogProvider } from "./contexts/blogContext";
// import queryclien

function App() {
  return (
    <BlogProvider>
      <div>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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
