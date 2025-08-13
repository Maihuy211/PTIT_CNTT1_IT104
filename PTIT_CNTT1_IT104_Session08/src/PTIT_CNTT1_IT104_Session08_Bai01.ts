enum weekDays {
    Monday = "Thứ Hai",
    Tuesday = "Thứ Ba",
    Wednesday = "Thứ Tư",
    Thursday = "Thứ Năm",
    Friday = "Thứ Sáu",
    Saturday = "Thứ Bảy",
    Sunday = "Chủ Nhật"
}

const days = Object.values(weekDays)
for(let i = 0 ; i < days.length ; i++){
    console.log(days[i]);
}
