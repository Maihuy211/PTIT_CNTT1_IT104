interface User {
  email: string;
  password: string;
}
export default function HomePage() {
  const userString = localStorage.getItem("currentUser");
  const user: User = userString ? JSON.parse(userString) : {};

  return (
    <div className="flex justify-center mt-[20%]">
      <div>
        <h2>
          <b>Home Page</b>
        </h2>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}
