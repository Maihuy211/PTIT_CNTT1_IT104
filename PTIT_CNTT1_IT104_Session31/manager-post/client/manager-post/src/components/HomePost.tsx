import { useEffect, useState } from "react";
import InputPost from "./InputPost";
import ListPost from "./ListPost";
import axios from "axios";

export type PostType = {
  id: number;
  title: string;
  createAt: string;
  img: string;
  status: "active" | "inactive";
};

export type NewPostType = {
  title: string;
  createAt: string;
  img: string;
  status: "active" | "inactive";
};

export default function HomePost() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [searchKeyword, setSearchKeyword] = useState(""); // từ khoá tìm kiếm
  const [searchStatus, setSearchStatus] = useState<"active" | "inactive" | "all">("all"); // trạng thái lọc

  // Lấy danh sách post theo keyword và status
  const getPosts = async () => {
    try {
      let url = `http://localhost:8080/posts?title_like=${searchKeyword}`;
      if (searchStatus !== "all") {
        url += `&status=${searchStatus}`;
      }
      const res = await axios.get(url);
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKeyword, searchStatus]); // gọi lại khi từ khoá hoặc trạng thái thay đổi

  // Cập nhật trạng thái active/inactive
  const toggleTask = async (id: number, status: "active" | "inactive") => {
    try {
      const newStatus = status === "active" ? "inactive" : "active";
      await axios.patch(`http://localhost:8080/posts/${id}`, { status: newStatus });
      getPosts();
    } catch (err) {
      console.error(err);
    }
  };

  // Thêm bài viết mới
  const addPost = (newPost: NewPostType) => {
    axios.post("http://localhost:8080/posts", newPost)
      .then(() => getPosts())
      .catch((err) => console.error(err));
  };

  // Cập nhật bài viết
  const updatePost = async (id: number, updatedPost: NewPostType) => {
    try {
      await axios.put(`http://localhost:8080/posts/${id}`, updatedPost);
      getPosts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-20 flex justify-center">
      <div className="bg-white shadow-2xl p-5 rounded w-[85%]">
        <InputPost
          addPost={addPost}
          setSearchKeyword={setSearchKeyword}
          setSearchStatus={setSearchStatus}
        />
        <ListPost
          posts={posts}
          toggleTask={toggleTask}
          updatePost={updatePost}
        />
      </div>
    </div>
  );
}
