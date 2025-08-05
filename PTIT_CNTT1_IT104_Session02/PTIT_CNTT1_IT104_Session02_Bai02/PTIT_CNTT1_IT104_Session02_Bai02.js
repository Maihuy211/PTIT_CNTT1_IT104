const greetingWithWeather = (name, weather) =>{
    if(weather==='sunny'){
        return `Chào ${name}! Hôm nay trời nắng tuyệt vời!`
    }else if(weather==='rainy'){
        return `Chào ${name}! Hôm nay trời mưa, hãy mang theo ô!`
    }else{
        return `Chào ${name}! Hôm nay thời tiết không xác định.`
    }
}

console.log(greetingWithWeather("huy","sunny"));
console.log(greetingWithWeather("an","rainy"));
console.log(greetingWithWeather("duong","cloudy"));