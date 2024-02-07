// let url = 'https://jsonplaceholder.typicode.com/users/';  
// console.log(url);  
// fetch(url)  
// .then(response => response.json()) 
// .then(json => console.log(json))

const cardCon = document.querySelector("#card");
const profileCon = document.querySelector("#profile");

const fetchData = async ()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users/');
    const users = await data.json();
    printCard(users);
}

const printCard = (users)=>{
    users.map((user)=>{
        const {name, email, username} = user;
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>Name :${name}</h2>
            <h3>Username : ${username}</h3>
            <h4>Email : ${email}</h4>
           `;
        div.style.border = "1px solid black"
        cardCon.appendChild(div);
    })
}
fetchData();
