const listUser = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    gender: "Nam",
    birthDate: "20/11/2023",
    address: "Thanh Xuân, Hà Nội",
  },
  {
    id: 2,
    name: "Nguyễn Thị B",
    gender: "Nữ",
    birthDate: "20/11/2023",
    address: "Cầu Giấy, Hà Nội",
  },
];

const listUserReducer = (state = listUser) => {
  return state;
};

export default listUserReducer;
