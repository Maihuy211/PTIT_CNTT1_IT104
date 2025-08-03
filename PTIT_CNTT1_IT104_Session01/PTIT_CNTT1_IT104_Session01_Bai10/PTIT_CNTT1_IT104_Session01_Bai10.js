const arr = (a) =>{
    const group = {}

    for (let word of a){
        const key = word.split('').sort().join('')

        if(!group[key]){
            group[key] = [];
        }
        group[key].push(word);
    }
    const result = []
    for(let key in group){
        result.push(group[key])
    }
    return result
}

console.log(arr(["eat", "tea", "tan", "ate", "nat", "bat"]))