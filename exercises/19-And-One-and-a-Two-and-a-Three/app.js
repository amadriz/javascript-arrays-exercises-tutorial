let contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}

let output = []

for(let key in contact){
    // Code goes here
    output.push(key + " : " + contact[key]);
}

console.log(output)