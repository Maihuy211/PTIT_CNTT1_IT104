import "../style/FormatName.css"
interface User {
  firstName: string;
  lastName: string;
}
function formatName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}
const FormatName = () => {
  const user: User = {
    firstName: "Mai Văn",
    lastName: "Huy",
  };
  return (
    <div>
      <b>Họ và tên: {formatName(user)}</b>
    </div>
  );
};

export default FormatName;
