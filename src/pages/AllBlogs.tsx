import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useBlogs } from "@/contexts/blogContext";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function AllBlog() {
  const {
    blogs,
    register,
    handleSubmit,
    handleAddBlog,
    errors,
    handleDeleteBlog,
  } = useBlogs();
  
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Add</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form action="submit" onSubmit={handleSubmit(handleAddBlog)}>
            <DialogHeader>
              <DialogTitle>Add new task</DialogTitle>
              <DialogDescription>
                Let's input your task title and content to create your new task.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Title</Label>
                <Input
                  id="name-1"
                  placeholder="Enter title of blog"
                  {...register("title", { required: true })}
                />
                <p>
                  {errors.title && (
                    <p className="text-red-500">Title is must have</p>
                  )}
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name-1">Description</Label>
                <Input
                  id="name-1"
                  placeholder="Enter description of blog"
                  {...register("description", { required: true })}
                />
                <p>
                  {errors.title && (
                    <p className="text-red-500">Description is must have</p>
                  )}
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Content</Label>
                <Input
                  id="username-1"
                  placeholder="Enter content of blog"
                  {...register("content", { required: true })}
                />
                <p>
                  {errors.content && (
                    <p className="text-red-500">Content is must have</p>
                  )}
                </p>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              {/* <Button variant="default">Add</Button> */}
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <div className=" mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((baidang) => (
          //   <li key={baidang.id}>
          //     {baidang.title} - {baidang.content}{" "}
          //     <Button variant="outline" asChild>
          //       <Link to={`/blog/${baidang.id}`}>Read</Link>
          //     </Button>{" "}
          //     {/* <Button
          //       variant="destructive"
          //       onClick={() => handleDeleteBlog(baidang.id)}
          //     >
          //       Delete
          //     </Button> */}
          //     {/* ====================================== */}
          //     <AlertDialog>
          //       <AlertDialogTrigger asChild>
          //         <Button variant="destructive">Delete</Button>
          //       </AlertDialogTrigger>
          //       <AlertDialogContent>
          //         <AlertDialogHeader>
          //           <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          //           <AlertDialogDescription>
          //             This action cannot be undone. This will permanently delete
          //             your account and remove your data from our servers.
          //           </AlertDialogDescription>
          //         </AlertDialogHeader>
          //         <AlertDialogFooter>
          //           <AlertDialogCancel>Cancel</AlertDialogCancel>
          //           <AlertDialogAction
          //             className="border bg-red-600"
          //             onClick={() => handleDeleteBlog(baidang.id)}
          //           >
          //             Delete
          //           </AlertDialogAction>
          //         </AlertDialogFooter>
          //       </AlertDialogContent>
          //     </AlertDialog>

          //     {/* ====================================== */}
          //   </li>
          <Card key={baidang.id}>
            <CardHeader>
              <CardTitle>
                <img src="src/assets/mac.jfif" alt="" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardTitle className="flex justify-start">{baidang.title}</CardTitle>
              <p className="flex justify-start">{baidang.description}</p>
            </CardContent>
            <CardFooter className="flex flex-row justify-around">
              <Button variant="outline" asChild>
                <Link to={`/blog/${baidang.id}`}>View</Link>
              </Button>{" "}
              {/* ====================================== */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Delete Blog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your  blog and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className="border bg-red-600"
                      onClick={() => handleDeleteBlog(baidang.id)}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
