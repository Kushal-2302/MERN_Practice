//! ---------Fecthing Data with Promises
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    console.log("Users fetched successfully: ", data);
})
.catch(error => {
    console.error("Error fetching users: ",error)
})


//! ---------Chaning Promises
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    console.log("Total users: ", users.length);
    return users[0];
})
.then(firstUser => {
    console.log("firstUser: ",firstUser);
})
.catch(error => {
    console.log("Users not found: ",error);
})


//! --------Fetch data sing async/await
async function getUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log("Users fetched successfully: ",users);
        users.forEach((user) => console.log(user.name));
    }catch(error){
        console.error("Error fetching users: ",error);
    }
}
getUsers()


//! ------User Search
async function findUserByName(name){
    try {
        const response  = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response .json();
        const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());

        if(user){
            console.log("User found: ",user);
        }else{
            console.log(" User not  found.")
        }
    }catch(error){
        console.log("Error fetching users: ",error);
    }
}
findUserByName("Kushal Kumar"); //User not found
findUserByName("Leanne Graham"); // Data will be displayed


//! -------email & password check using promise
async function login(email,password){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

        if(user && password === "secret123"){
            console.log("Login successfull Welcome, ",user.name);
        }else{
            console.log("Login failed. Invalid email or password. ");
        }
    }catch(error){
        console.log("Error duirng login: ",error);
    }
}
login("Sincere@april.biz", "secret123"); // success
login("Sincere@april.biz", "wrongpass"); // fail