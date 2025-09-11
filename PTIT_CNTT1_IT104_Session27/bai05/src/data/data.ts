export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}
export const posts: Post[] = [
  {
    id: 1,
    title: "Bắt đầu với React",
    excerpt: "Giới thiệu về React và cách khởi tạo dự án...",
    content:
      "React là thư viện JavaScript phổ biến để xây dựng giao diện người dùng. Bạn có thể dễ dàng tạo các component tái sử dụng. Trong phần này, chúng ta sẽ tìm hiểu cách khởi tạo một ứng dụng React cơ bản bằng Create React App và Vite. Ngoài ra, bạn cũng sẽ học cách tổ chức project theo cấu trúc hợp lý.",
  },
  {
    id: 2,
    title: "Sử dụng TailwindCSS",
    excerpt: "Tailwind giúp bạn viết CSS nhanh và tiện lợi...",
    content:
      "TailwindCSS là một framework CSS tiện ích-first. Nó cho phép bạn xây dựng giao diện một cách nhanh chóng bằng cách kết hợp các class có sẵn. Thay vì viết CSS thủ công, bạn có thể sử dụng các class để điều chỉnh màu sắc, padding, margin và nhiều hơn nữa. Điều này giúp tăng tốc độ phát triển dự án.",
  },
  {
    id: 3,
    title: "Giới thiệu về React Router",
    excerpt: "Điều hướng trong React với React Router DOM...",
    content:
      "React Router là thư viện giúp quản lý điều hướng trong ứng dụng React. Nó cho phép bạn tạo nhiều trang, quản lý URL, và điều hướng người dùng một cách mượt mà. Trong phần này, bạn sẽ học cách sử dụng Routes, Route, NavLink, và Outlet để tạo hệ thống routing.",
  },
  {
    id: 4,
    title: "Quản lý state với Redux",
    excerpt: "Redux giúp quản lý state tập trung...",
    content:
      "Redux là một thư viện quản lý state tập trung, giúp ứng dụng dễ bảo trì hơn. Bạn có thể lưu trữ toàn bộ state trong một store duy nhất. Redux cũng hỗ trợ các middleware như Redux Thunk hoặc Saga để xử lý logic bất đồng bộ.",
  },
  {
    id: 5,
    title: "Hooks trong React",
    excerpt: "useState, useEffect và các hook phổ biến...",
    content:
      "Hooks là một tính năng mạnh mẽ của React, cho phép bạn sử dụng state và các tính năng khác mà không cần viết class component. useState giúp bạn quản lý state cục bộ, useEffect giúp xử lý side effects như gọi API. Ngoài ra còn có nhiều hook khác như useContext, useReducer, useMemo...",
  },
];
