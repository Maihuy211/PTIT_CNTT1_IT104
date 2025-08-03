const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};

let {data: {id , title , author}} = response 
let {name: authorName , email: authorEmail} = author
    
console.log("Title: ",title)
console.log("Author: ",author)
console.log("AuthorName: ",authorName)
console.log("AuthorEmail: ",authorEmail)


