import './App.css'

const UserInfo = () => {
    const user = {
        name: "Mai Văn Huy",
        gender: "Nam",
        birthday: "25/11/2006",
        email: "huy@gmail.com",
        address: "Trái đất"
    };
    return (
        <div>
            <h4>Thông tin cá nhân</h4>
            <ul>
                <li>Họ và tên: <b>{user.name}</b></li>
                <li>Giới tính: <b>{user.gender}</b></li>
                <li>Ngày sinh: <b>{user.birthday}</b></li>
                <li>Email: <b>{user.email}</b></li>
                <li>Địa chỉ: <b>{user.address}</b></li>
            </ul>
        </div>
    );
};

export default UserInfo;
