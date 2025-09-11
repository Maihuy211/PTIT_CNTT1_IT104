import { useParams } from "react-router-dom";
import { posts, type Post } from "../data/data";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const post: Post | undefined = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <p>Bài viết không tồn tại.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
    </div>
  );
}
