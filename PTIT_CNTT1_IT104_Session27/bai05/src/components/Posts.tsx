import { Link } from "react-router-dom";
import { posts } from "../data/data";

export default function Posts() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Danh sách bài viết</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded bg-gray-100 hover:shadow transition"
          >
            <Link
              to={`/posts/${post.id}`}
              className="text-blue-600 font-semibold"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
