const phoneBooks = [] 
const addContact = (name , phone , email) => {
    phoneBooks.push({name , phone , email})
}

const displayContact = (phoneBooks) =>{
     phoneBooks.forEach(e=> {
        console.log(e)      
    });
}
addContact("huy","0987654321","huy@gmail.com")
addContact("an","0987654322","an@gmail.com")
addContact("duong","0987654323","duong@gmail.com")

displayContact(phoneBooks);

