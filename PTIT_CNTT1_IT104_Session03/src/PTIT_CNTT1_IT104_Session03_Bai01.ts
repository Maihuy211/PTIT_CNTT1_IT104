const username : string = "huy"
const age : number = 18
const job : string = "sinh vien"

const show =  (username: string , age : number , job: string ): void => {
    document.write(`${username} <br>`)
    document.write(`${age} <br>`)
    document.write(`${job} <br>`)
}

show(username,age,job)